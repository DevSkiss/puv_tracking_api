const mongoose = require("mongoose");
const Schema = require("mongoose");
const model = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"],
  },
  lastname: {
    type: String,
    require: [true, "Last name is required"],
  },
  age: {
    type: String,
    require: [true, "Age is required"],
  },
  gender: {
    type: String,
    require: [true, "GEnder is rquired"],
  },
  birthday: {
    type: Date,
    require: [true, "Date is required"],
  },
  address: {
    type: String,
    require: [true, "Address Required"],
  },
  mobileNo: {
    type: String,
    require: [true, "Mobile Number is required"],
  },
  role: {
    type: String,
    default: "Admin",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  superAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
