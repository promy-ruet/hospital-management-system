// models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  head: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  services: [{ type: String }],
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Department', departmentSchema);