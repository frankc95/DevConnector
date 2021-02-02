const mongoose = require('mongoose');

// User Model for DB
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export variable 'User' that takes 2 parameters - model name of 'user' and Schema
module.exports = User = mongoose.model('user', UserSchema);
