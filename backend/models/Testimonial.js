// models/Testimonial.js
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  serviceType: { type: String },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);