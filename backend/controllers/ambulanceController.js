const AmbulanceBooking = require('../models/AmbulanceBooking');

const bookAmbulance = async (req, res) => {
  const { name, city, phone } = req.body;

  if (!name || !city || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newBooking = new AmbulanceBooking({ name, city, phone });
    await newBooking.save();
    res.status(201).json({ message: 'Ambulance booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { bookAmbulance };
