const express = require('express');
const AuthController = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/login', AuthController.loginValidation, AuthController.login);
router.post('/register', protect, authorize('admin'), AuthController.registerValidation, AuthController.register);

// Protected routes
router.get('/me', protect, AuthController.getMe);

module.exports = router;