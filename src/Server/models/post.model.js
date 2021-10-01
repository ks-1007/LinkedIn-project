const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    body: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model("post", postSchema)
