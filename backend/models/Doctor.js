// models/Doctor.js
const mongoose = require('mongoose');
const User = require('./User');

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String },
  education: [{ 
    degree: String,
    institute: String,
    year: Number
  }],
  experience: [{ 
    position: String,
    hospital: String,
    duration: String
  }],
  schedule: [{
    day: String,
    startTime: String,
    endTime: String,
    maxAppointments: Number
  }],
  consultationFee: { type: Number },
  rating: { type: Number, default: 0 },
  reviews: [{
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    review: String,
    rating: Number,
    date: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('Doctor', doctorSchema);