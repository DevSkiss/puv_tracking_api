const mongoose = require('mongoose');
const Schema = require('mongoose');
const model = require('mongoose');

const adminSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastname: {
    type: String,
    require: [true, 'Last name is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
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

module.exports = mongoose.model('Admin', adminSchema);
