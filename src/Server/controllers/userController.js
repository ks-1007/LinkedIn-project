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

// get user and token from email
router.get("/profile/:email", async (req, res) => {
  const user = await User.find({ email: req.params.email }).exec()
  // console.log("user:", user)
  const token = newToken(user[0])
  return res.status(200).json({ user: user[0], token })
})

//[untested] updating for location, about
router.patch("", authenticate, async (req, res) => {
  const { user } = req.user
  const updated = await User.findByIdAndUpdate(user._id, req.body)

  return res.status(201).json({ updated })
})

//[untested] updating profile-pic
router.patch(
  "/profile-pic",
  authenticate,

  async (req, res) => {
    const { user } = req.user
    console.log(req.body)
    const updated = await User.findByIdAndUpdate(user._id, req.body)

    return res.status(201).json({ updated })
  }
)

//[untested] updating background pic
router.patch(
  "/background-pic",
  authenticate,

  async (req, res) => {
    const { user } = req.user
    console.log("user:", user)
    const updated = await User.findByIdAndUpdate(user._id, req.body)

    return res.status(201).json({ updated })
  }
)

//[untested] adding in user's education
router.patch("/education_add", authenticate, async (req, res) => {
  const { user } = req.user
  const curr_user = await User.findById(user._id)
  const { education } = curr_user
  const updated = await User.findByIdAndUpdate(
    user._id,
    {
      $push: { education: [req.body.education, ...education] },
    },
    { upsert: true, new: true }
  )

  return res.status(201).json({ updated })
})

//[untested] adding in user's certification
router.patch("/certification_add", authenticate, async (req, res) => {
  const { user } = req.user
  const curr_user = await User.findById(user._id)
  const { licenses_certifications } = curr_user
  const updated = await User.findByIdAndUpdate(
    user._id,
    {
      $push: {
        licenses_certifications: [
          req.body.education,
          ...licenses_certifications,
        ],
      },
    },
    { upsert: true, new: true }
  )

  return res.status(201).json({ updated })
})

//[untested] adding in user's skills
router.patch("/skill_add", authenticate, async (req, res) => {
  const { user } = req.user
  const curr_user = await User.findById(user._id)
  const { skill } = curr_user
  const updated = await User.findByIdAndUpdate(
    user._id,
    {
      $push: {
        skill: [req.body.education, ...skill],
      },
    },
    { upsert: true, new: true }
  )

  return res.status(201).json({ updated })
})

//[untested] adding in user's accomplishments
router.patch("/accomplishments_add", authenticate, async (req, res) => {
  const { user } = req.user
  const curr_user = await User.findById(user._id)
  const { accomplishments } = curr_user
  const updated = await User.findByIdAndUpdate(
    user._id,
    {
      $push: {
        accomplishments: [req.body.education, ...accomplishments],
      },
    },
    { upsert: true, new: true }
  )

  return res.status(201).json({ updated })
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

// getting list of invite requests
router.get("/invite", authenticate, async (req, res) => {
  const { user } = req.user

  const curr_user = await User.findById(user._id)

  const { invites } = curr_user

  const inviters = await User.find({ _id: { $in: invites } })
    .lean()
    .exec()

  return res.status(201).send({ inviters })
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
