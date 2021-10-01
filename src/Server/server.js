const express = require("express")
const session = require("express-session")
const passport = require("passport")
require("./middlewares/auth")

const User = require("./models/user.model")
const connect = require("./configs/db")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
//Passport start--------
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401)
}

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

//Passport end--------

const userController = require("./controllers/userController")
const postController = require("./controllers/postController")

app.use("/users", userController)
app.use("/posts", postController)

//-------------O auth2---------------
app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
)

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
)

app.get("/protected", isLoggedIn, async (req, res) => {
  console.log(req.user)
  const user = await User.find({ email: req.user.email }).lean().exec()
  if (user.length > 0) {
    res.writeHead(301, {
      // Location: "http://localhost:3000/profile",
      Location: "http://localhost:3000/profile",
    })
  } else {
    res.writeHead(301, {
      // Location: "http://localhost:3000/profile",
      Location: "http://localhost:3000/create-user",
    })
  }

  res.end()
  // res.send("hello")
})

app.get("/logout", (req, res) => {
  req.logout()
  req.session.destroy()
  res.send("Goodbye!")
})

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..")
})

app.listen(5000, async function () {
  await connect()
  console.log("listening on port 5000")
})
