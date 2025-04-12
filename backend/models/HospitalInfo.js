// models/HospitalInfo.js
const mongoose = require('mongoose');

const hospitalInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String },
  mission: { type: String },
  vision: { type: String },
  contact: {
    address: String,
    phone: String,
    email: String,
    emergency: String
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String
  },
  visitingHours: String,
  facilities: [{ type: String }], // ["Free WiFi", "Parking", "Cafeteria"]
  stats: {
    doctors: Number,
    patients: Number,
    departments: Number,
    beds: Number
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model('HospitalInfo', hospitalInfoSchema);