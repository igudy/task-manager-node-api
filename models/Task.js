const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxlength: [1000, "Name can not be more than 1000 characters"],
  },
  completed: {
    type: Boolean,
    // default: false,
  },
})

module.exports = mongoose.model("Task", TaskSchema)
