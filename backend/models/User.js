const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true,
    trim: true
  },
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

// IMPORTANT: Remove the pre-save middleware since we're handling password hashing in the route
// This prevents double-hashing when passwords are already hashed during registration

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;