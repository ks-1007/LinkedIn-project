const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    connections: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
    profile_pic: { type: String, required: false },
    background_pic: { type: String, required: false },
    location: { type: String, required: false },
    about: { type: String, required: false },
    education: [{ type: String, required: false }],
    licenses_certifications: [{ type: String, required: false }],
    skill: [{ type: String, required: false }],
    accomplishments: [{ type: String, required: false }],
    requests: [{ type: String, required: false }],
    invites: [{ type: String, required: false }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model("user", userSchema)
