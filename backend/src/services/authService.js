const jwt = require('jsonwebtoken');
const User = require('../models/User');

class AuthService {
  static generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE || '7d'
    });
  }

  static async login(username, password) {
    const user = await User.findByUsername(username);

    if (!user || !user.is_active) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await User.comparePassword(password, user.password_hash);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    };
  }

  static async register(userData) {
    const { username, email, password, role } = userData;

    // Check if user already exists
    const existingUser = await User.findByUsername(username) || await User.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const userId = await User.create({ username, email, password, role });

    const token = this.generateToken(userId);

    return {
      token,
      user: {
        id: userId,
        username,
        email,
        role: role || 'editor'
      }
    };
  }

  static async getCurrentUser(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      is_active: user.is_active,
      created_at: user.created_at,
      updated_at: user.updated_at
    };
  }
}

module.exports = AuthService;