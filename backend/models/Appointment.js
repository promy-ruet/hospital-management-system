const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
