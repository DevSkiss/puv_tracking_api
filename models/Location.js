const mongoose = require("mongoose");
const Schema = require("mongoose");
const model = require("mongoose");

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  subjects: [
    {
      subjectId: {
        type: String,
      },
    },
  ],
  students: [
    {
      studentId: {
        type: String,
      },
    },
  ],
  createdBy: {
    type: String,
    require: [true, "Created by is required"],
  },
  maxStudents: {
    type: Number,
    require: [true, "Max Students is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Section", sectionSchema);
