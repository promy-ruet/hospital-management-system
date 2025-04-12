require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Appointment = require('./models/Appointment');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meditrust')
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes

app.post('/api/register', async (req, res) => {
  try {
    const { username, password, fullName } = req.body;

    // Check if username exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username already exists'
      });
    }

    // Create new user with only required fields
    const user = new User({
      username,
      password,
      fullName
      // Other fields will be undefined (optional)
    });

    await user.save();

    res.status(201).json({ 
      success: true, 
      message: 'Registration successful',
      username: user.username
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Registration failed. Please try again.'
    });
  }
});
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid username or password' 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid username or password' 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Login successful', 
      username: user.username 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false, 
      message: 'Login failed. Please try again.'
    });
  }
});

// Appointment routes
app.post('/api/appointments', async (req, res) => {
  try {
    const appointmentData = {
      ...req.body,
      status: 'pending' // Add default status
    };

    const appointment = new Appointment(appointmentData);
    await appointment.save();

    res.status(201).json({ 
      success: true, 
      message: 'Appointment booked successfully',
      appointmentId: appointment._id
    });
  } catch (error) {
    console.error('Appointment error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error while booking appointment',
      error: error.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});