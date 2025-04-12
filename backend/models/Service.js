// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['ambulance', 'blood-bank', 'pharmacy', 'cafeteria', 'car-parking', 'atm', 'laboratory'],
    required: true 
  },
  description: { type: String },
  contact: {
    phone: String,
    email: String,
    location: String
  },
  availability: { type: Boolean, default: true },
  operatingHours: {
    open: String,
    close: String,
    days: [String]
  },
  // For ambulance specific fields
  vehicleNumber: { type: String },
  driver: { type: String },
  // For blood bank specific fields
  bloodTypes: [{
    type: String,
    quantity: Number
  }],
  // For pharmacy specific fields
  medicines: [{
    name: String,
    price: Number,
    stock: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);