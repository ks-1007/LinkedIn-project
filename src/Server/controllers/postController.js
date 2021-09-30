const express = require("express")

const router = express.Router()

const Post = require("../models/post.model")

const authenticate = require("../middlewares/authenticate")

// getting feeds of connections
router.get("", authenticate, async function (req, res) {
  // getting current user from authenticate middleware
  const { user } = req.user
  const { connections } = user
  const posts = await Post.find({
    $or: [{ user: user._id }, { user: { $in: connections } }],
  })
    .lean()
    .exec()

  res.send(200).json({ posts })
})

// posting a post
router.post("", async function (req, res) {
  // getting user from authenticate middleware
  const { user } = req.user
  let body = req.body
  body.user = user._id
  const post = await Post.create(body)

  return res.status(201).json({ post })
})

module.exports = router
