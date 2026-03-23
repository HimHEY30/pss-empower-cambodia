const express = require('express');
const pool = require('../config/database');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

// @desc    Get all media
// @route   GET /api/media
// @access  Private
router.get('/', async (req, res, next) => {
  try {
    const [media] = await pool.execute(
      'SELECT id, url, alt_text, type, file_size, mime_type, created_at FROM media WHERE is_active = 1 ORDER BY created_at DESC'
    );

    res.status(200).json({
      success: true,
      count: media.length,
      data: media
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Create media
// @route   POST /api/media
// @access  Private (Admin/Editor)
router.post('/', authorize('admin', 'editor'), async (req, res, next) => {
  try {
    const { url, alt_text, type, file_size, mime_type } = req.body;

    const [result] = await pool.execute(
      'INSERT INTO media (url, alt_text, type, file_size, mime_type) VALUES (?, ?, ?, ?, ?)',
      [url, alt_text, type, file_size, mime_type]
    );

    res.status(201).json({
      success: true,
      data: { id: result.insertId }
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Update media
// @route   PUT /api/media/:id
// @access  Private (Admin/Editor)
router.put('/:id', authorize('admin', 'editor'), async (req, res, next) => {
  try {
    const { url, alt_text, type, file_size, mime_type, is_active } = req.body;

    const updates = [];
    const values = [];

    if (url !== undefined) {
      updates.push('url = ?');
      values.push(url);
    }
    if (alt_text !== undefined) {
      updates.push('alt_text = ?');
      values.push(alt_text);
    }
    if (type !== undefined) {
      updates.push('type = ?');
      values.push(type);
    }
    if (file_size !== undefined) {
      updates.push('file_size = ?');
      values.push(file_size);
    }
    if (mime_type !== undefined) {
      updates.push('mime_type = ?');
      values.push(mime_type);
    }
    if (is_active !== undefined) {
      updates.push('is_active = ?');
      values.push(is_active);
    }

    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No fields to update'
      });
    }

    values.push(req.params.id);
    await pool.execute(
      `UPDATE media SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Delete media
// @route   DELETE /api/media/:id
// @access  Private (Admin only)
router.delete('/:id', authorize('admin'), async (req, res, next) => {
  try {
    await pool.execute('UPDATE media SET is_active = 0 WHERE id = ?', [req.params.id]);

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;