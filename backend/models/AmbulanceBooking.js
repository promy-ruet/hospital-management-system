const mongoose = require('mongoose');

const ambulanceBookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  patientName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^01[3-9]\d{8}$/.test(v);
      },
      message: props => `${props.value} is not a valid Bangladeshi phone number!`
    }
  },
  emergencyType: {
    type: String,
    required: true,
    enum: ['General', 'Heart Attack', 'Accident', 'Stroke', 'Delivery', 'Pediatric', 'Other'],
    default: 'General'
  },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true }
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Dispatched', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  bookingTime: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('AmbulanceBooking', ambulanceBookingSchema);