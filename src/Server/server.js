require("dotenv").config()
const express = require("express")

const app = express()
const cors = require("cors")
const connect = require("./configs/db")

const passport = require("passport")
const cookieSession = require("cookie-session")
const User = require("./models/user.model")
require("./passport-setup")
app.use(cors())

// passport OAuth start
app.use(
  cookieSession({
    name: "linkedIn-demo",
    keys: ["key1", "key2"],
  })
)

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.sendStatus(401)
  }
}

app.use(express.json())

app.use(passport.initialize())
//app.use(passport.session())

app.get("/failed", (req, res) => res.send("you failed to log in!"))
app.get("/", (req, res) => res.send("logged out"))
app.get("/good/:email", isLoggedIn, (req, res) =>
  res.send(`welcome mr ${req.params.email}`)
)

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
)

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  async function (req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user)
    const user = await User.find({ email: req.user._json.email }).lean().exec()
    if (user.length > 0) {
      res.redirect(`http://localhost:3000/profile/${req.user._json.email}`)
    } else {
      res.redirect(`http://localhost:3000/create-user/${req.user._json.email}`)
    }
  }
)

app.get("/logout", (req, res) => {
  req.session = null
  req.logout()
  res.redirect("/")
})
// pasport OAuth ends

const userController = require("./controllers/userController")
const postController = require("./controllers/postController")
const likeController = require("./controllers/likeController")
const commentController = require("./controllers/comment.controller")

app.use("/users", userController)
app.use("/posts", postController)
app.use("/likes", likeController)
app.use("/comments", commentController)

app.listen(5000, async function () {
  await connect()
  console.log("listening on port 5000")
})
