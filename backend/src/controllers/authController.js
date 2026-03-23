const { body, validationResult } = require('express-validator');
const AuthService = require('../services/authService');
const { protect } = require('../middleware/auth');

class AuthController {
  // @desc    Login user
  // @route   POST /api/auth/login
  // @access  Public
  static async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { username, password } = req.body;
      const result = await AuthService.login(username, password);

      res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Register user
  // @route   POST /api/auth/register
  // @access  Private (Admin only)
  static async register(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { username, email, password, role } = req.body;
      const result = await AuthService.register({ username, email, password, role });

      res.status(201).json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Get current user
  // @route   GET /api/auth/me
  // @access  Private
  static async getMe(req, res, next) {
    try {
      const user = await AuthService.getCurrentUser(req.user.id);

      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  }

  // Validation rules
  static loginValidation = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
  ];

  static registerValidation = [
    body('username')
      .isLength({ min: 3, max: 50 })
      .withMessage('Username must be between 3 and 50 characters'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('role')
      .optional()
      .isIn(['admin', 'editor'])
      .withMessage('Role must be either admin or editor')
  ];
}

module.exports = AuthController;