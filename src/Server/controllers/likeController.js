const express = require("express")

const router = express.Router()

const authenticate = require("../middlewares/authenticate")

const Post = require("../models/post.model")
const Like = require("../models/like.model")
const User = require("../models/user.model")

// liking a post by user id and post id
router.post("", authenticate, async function (req, res) {
  const { user } = req.user

  let body = req.body

  body.user = user._id

  const like = await Like.create(body)

  return res.status(201).json({ like })
})

// removing like from post by user id and post id
router.delete("", authenticate, async function (req, res) {
  const { user } = req.user

  const userId = user._id
  const postId = req.body.user

  // finding like with userID and postID

  const like = await Like.find({ $and: [{ user: userId }, { post: postId }] })
    .lean()
    .exec()

  // deleting the like from the collection

  const delete_like = await Like.findByIdAndDelete(like._id)

  return res.status(201).json({ delete_like })
})

// getting all the users who liked a post
router.get("/:post_id", async function (req, res) {
  const likes = await Like.find({ post: req.params.post_id }).lean().exec()

  return res.status(200).json({ likes })
})

module.exports = router
