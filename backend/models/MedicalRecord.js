// models/MedicalRecord.js
const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  diagnosis: { type: String },
  prescription: [{
    medicine: String,
    dosage: String,
    duration: String,
    notes: String
  }],
  tests: [{
    name: String,
    result: String,
    file: String
  }],
  notes: { type: String },
  attachments: [{ type: String }],
  isEmergency: { type: Boolean, default: false }
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);