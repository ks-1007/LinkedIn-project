const express = require("express")

const router = express.Router()

const Post = require("../models/post.model")
const User = require("../models/user.model")
const authenticate = require("../middlewares/authenticate")

// getting feeds of connections
router.get("", authenticate, async function (req, res) {
  // getting current user from authenticate middleware
  const { user } = req.user
  const curr_user = await User.findById(user._id)
  let { connections } = curr_user
  connections = [...connections, user._id]
  //console.log("connections:", connections)
  const posts = await Post.find({ user: { $in: connections } })
    .populate("user")
    .lean()
    .exec()

  res.status(200).json({ posts })
})
// getting feeds of all
router.get("/all", authenticate, async function (req, res) {
  const posts = await Post.find().lean().exec()

  res.status(200).json({ posts })
})

// posting a post
router.post("", authenticate, async function (req, res) {
  // getting user from authenticate middleware
  const { user } = req.user
  let body = req.body
  body.user = user._id
  const post = await Post.create(body)

  return res.status(201).json({ post })
})

module.exports = router
