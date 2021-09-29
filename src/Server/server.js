const express = require("express")

const connect = require("./configs/db")

const app = express()
app.use(express.json())

const userController = require("./controllers/userController")
const postController = require("./controllers/postController")

app.use("/users", userController)
app.use("/posts", postController)

app.listen(8010, async function () {
  await connect()
  console.log("listening on port 8010")
})
