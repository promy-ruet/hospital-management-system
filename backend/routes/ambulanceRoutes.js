const express = require('express');
const router = express.Router();
const { bookAmbulance } = require('../controllers/ambulanceController');

router.post('/book', bookAmbulance);

module.exports = router;
