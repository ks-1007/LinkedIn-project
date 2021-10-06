const express = require("express")

const router = express.Router()

const authenticate = require("../middlewares/authenticate")

const Post = require("../models/post.model")
const User = require("../models/user.model")
const Comment = require("../models/comment.model")
// posting a comment
router.post("", authenticate, async function (req, res) {
  const { user } = req.user
  let body = req.body
  body.user = user._id
  const comment = await Comment.create(body)

  return res.status(201).json({ comment })
})

// getting all comments of a post
router.get("/:post_id", async function (req, res) {
  let comments = await Comment.find({ post: req.params.post_id })
    .populate("user")
    .lean()
    .exec()
  comments = comments.reverse()
  return res.status(200).json({ comments })
})

module.exports = router
