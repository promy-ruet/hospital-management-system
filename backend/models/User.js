// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String }, // Made optional
  dateOfBirth: { type: Date }, // Made optional
  password: { type: String, required: true },
  phoneNumber: { type: String }, // Made optional
  gender: { type: String }, // Made optional
  houseNumber: { type: String },
  thana: { type: String },
  district: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Add password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', userSchema);