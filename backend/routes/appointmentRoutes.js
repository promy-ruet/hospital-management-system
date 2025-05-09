const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Create an appointment
router.post('/', appointmentController.createAppointment);

// Get all appointments
router.get('/', appointmentController.getAllAppointments);

// Get a single appointment
router.get('/:id', appointmentController.getAppointment);

// Update an appointment
router.put('/:id', appointmentController.updateAppointment);

// Delete an appointment
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
