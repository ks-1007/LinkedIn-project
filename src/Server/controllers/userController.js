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

// getting all users which are not connection (to show on suggestion list)
router.get("", authenticate, async (req, res) => {
  // we will get current user from authenticate middlewares
  const { user } = req.user
  const { connections } = user
  const users = await User.find({ _id: { $nin: connections } })
    .lean()
    .exec()

  return res.status(200).send({ users })
})

module.exports = router
