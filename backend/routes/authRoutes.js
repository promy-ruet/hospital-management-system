const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// ✅ Public Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// 🛡️ Optional: Logging
router.use((req, res, next) => {
  console.log("🔀 Entering protected section:", req.originalUrl);
  next();
});

// 🔐 Protected Routes START from here
router.use(authController.protect);

router.get('/me', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: req.user
    }
  });
});

// 🔒 Admin-only Routes
router.use(authController.restrictTo('admin'));

router.get('/admin-stats', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: 'Admin stats here'
    }
  });
});

module.exports = router;
