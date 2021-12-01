const mongoose = require('mongoose');
const Schema = require('mongoose');
const model = require('mongoose');

const locationSchema = new mongoose.Schema({
  longitude: {
    type: String,
    required: [true, 'Longitude is required'],
  },
  latitude: {
    type: String,
    required: [true, 'Latitude is required'],
  },
  userId: {
    type: String,
    required: [true, 'User Id is required'],
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  user_type: {
    type: String,
    required: [true, 'User Type is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Location', locationSchema);
