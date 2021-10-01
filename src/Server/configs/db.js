const mongoose = require("mongoose")

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://saurav:saurav@cluster0.mo36q.mongodb.net/linkedIn-db?retryWrites=true&w=majority"
  )
}
