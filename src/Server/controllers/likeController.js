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
router.patch("", authenticate, async function (req, res) {
  const { user } = req.user

  const userId = user._id
  // console.log("userId:", userId)
  const postId = req.body.post
  // console.log("postId:", postId)

  // finding like with userID and postID

  const like = await Like.find({ $and: [{ user: userId }, { post: postId }] })
    .lean()
    .exec()

  // deleting the like from the collection

  const delete_like = await Like.findByIdAndDelete(like[0]._id)

  return res.status(201).json({ delete_like })
})

// getting all the users who liked a post
router.get("/:post_id", authenticate, async function (req, res) {
  const { user } = req.user

  const curr_userId = user._id
  const curr_user = await User.find({ _id: curr_userId }).lean().exec()
  const curr_user_name = curr_user[0].name
  const curr_user_connections = curr_user[0].connections
  // console.log("curr_user_connections:", curr_user_connections)
  const likes = await Like.find({ post: req.params.post_id })
    .populate("user")
    .lean()
    .exec()

  return res
    .status(200)
    .json({ likes, curr_userId, curr_user_name, curr_user_connections })
})

module.exports = router
