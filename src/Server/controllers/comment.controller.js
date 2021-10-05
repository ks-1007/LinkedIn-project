const express = require("express")

const router = express.Router()

const authenticate = require("../middlewares/authenticate")

const Post = require("../models/post.model")
const User = require("../models/user.model")

// posting a comment

// getting all comments of a post

module.exports = router
