const mongoose = require('mongoose');
const Schema = require('mongoose');
const model = require('mongoose');

const driverSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required'],
  },
  plate_no: {
    type: String,
    required: [true, 'Plate No is required'],
  },
  license_no: {
    type: String,
    required: [true, 'License No is Required'],
  },
  mobile_no: {
    type: String,
    required: [true, 'Mobile Number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is Required'],
  },
  active: {
    type: Boolean,
    default: true,
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
});

module.exports = mongoose.model('Driver', driverSchema);
