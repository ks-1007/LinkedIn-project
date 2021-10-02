const express = require("express")
const session = require("express-session")
const passport = require("passport")
require("./middlewares/auth")

const connect = require("./configs/db")

const app = express()
app.use(express.json())

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

app.get("/protected", isLoggedIn, (req, res) => {
  console.log(req.user)
  res.send(`Hello ${req.user.email}, you are logged in`)
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
