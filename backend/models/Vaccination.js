// models/Vaccination.js
const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vaccineName: { type: String, required: true },
  dateAdministered: { type: Date, required: true },
  nextDoseDate: { type: Date },
  administeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vaccination', vaccinationSchema);