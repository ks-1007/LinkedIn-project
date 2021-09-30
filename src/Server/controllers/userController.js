const express = require("express")
const jwt = require("jsonwebtoken")

const newToken = (user) => {
  return jwt.sign({ user: user }, "masaischool")
}

const authenticate = require("../middlewares/authenticate")

const User = require("../models/user.model")

const router = express.Router()

// creating a user
router.post("", async (req, res) => {
  const user = await User.create(req.body)
  const token = newToken(user)
  // we will store this token into redux store
  return res.status(201).json({ token: token })
})

// getting all users
router.get("/all", authenticate, async (req, res) => {
  const users = await User.find().lean().exec()

  return res.status(200).send({ users })
})
// getting all users which are not connection (to show on suggestion list)
router.get("/not_connections", authenticate, async (req, res) => {
  // we will get current user from authenticate middlewares
  const { user } = req.user
  const curr_user = await User.findById(user._id)
  let { connections } = curr_user
  connections = [...connections, user._id]
  const users = await User.find({ _id: { $nin: connections } })
    .lean()
    .exec()

  return res.status(200).send({ users })
})
// getting all users which are connection (to show on connection list)
router.get("/connections", authenticate, async (req, res) => {
  // we will get current user from authenticate middlewares
  const { user } = req.user
  const curr_user = await User.findById(user._id)
  let { connections } = curr_user
  const users = await User.find({ _id: { $in: connections } })
    .lean()
    .exec()

  return res.status(200).send({ users })
})

// sending connection request
router.patch("/request/:receiver_id", authenticate, async (req, res) => {
  // we will get current user from authenticate middleware and receiver from params
  const { user } = req.user
  const receiver = await User.findByIdAndUpdate(req.params.receiver_id, {
    $push: { invites: user._id },
  })
  const curr_user = await User.findByIdAndUpdate(
    user._id,
    {
      $push: { requests: req.params.receiver_id },
    },
    { upsert: true, new: true }
  )

  return res.status(201).send({ curr_user })
})

// accepting invite request
router.patch("/invite/:inviter_id", authenticate, async (req, res) => {
  // we will get current user from authenticate middleware and inviter from params
  const { user } = req.user

  // adding user to connection list of inviter
  const inviter = await User.findByIdAndUpdate(
    req.params.inviter_id,
    {
      $push: { connections: user._id },
    },
    { upsert: true, new: true }
  )
  // removing user from requests list of inviter
  await User.findByIdAndUpdate(
    req.params.inviter_id,
    {
      $pull: { requests: user._id },
    },
    { upsert: true, new: true }
  )

  // adding user to connection list of inviter
  const curr_user = await User.findByIdAndUpdate(
    user._id,
    {
      $push: { connections: req.params.inviter_id },
    },
    { upsert: true, new: true }
  )
  // removing user from requests list of inviter
  await User.findByIdAndUpdate(
    user._id,
    {
      $pull: { invites: req.params.inviter_id },
    },
    { upsert: true, new: true }
  )

  return res.status(201).json({ curr_user })
})

module.exports = router
