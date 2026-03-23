const { body, param, query, validationResult } = require('express-validator');
const PageService = require('../services/pageService');

class PagesController {
  // @desc    Get page by slug
  // @route   GET /api/pages/:slug
  // @access  Public
  static async getPage(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { slug } = req.params;
      const { lang = 'en' } = req.query;

      const page = await PageService.getPageBySlug(slug, lang);

      res.status(200).json({
        success: true,
        data: page
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Get all pages
  // @route   GET /api/pages
  // @access  Private
  static async getPages(req, res, next) {
    try {
      const pages = await PageService.getAllPages();

      res.status(200).json({
        success: true,
        count: pages.length,
        data: pages
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Create page
  // @route   POST /api/pages
  // @access  Private (Admin/Editor)
  static async createPage(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const page = await PageService.createPage(req.body);

      res.status(201).json({
        success: true,
        data: page
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Update page
  // @route   PUT /api/pages/:id
  // @access  Private (Admin/Editor)
  static async updatePage(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { id } = req.params;
      const page = await PageService.updatePage(id, req.body);

      res.status(200).json({
        success: true,
        data: page
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Delete page
  // @route   DELETE /api/pages/:id
  // @access  Private (Admin only)
  static async deletePage(req, res, next) {
    try {
      const { id } = req.params;
      await PageService.deletePage(id);

      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(error);
    }
  }

  // Validation rules
  static getPageValidation = [
    param('slug').notEmpty().withMessage('Page slug is required'),
    query('lang').optional().isIn(['en', 'km']).withMessage('Language must be en or km')
  ];

  static createPageValidation = [
    body('slug')
      .isLength({ min: 2, max: 100 })
      .withMessage('Slug must be between 2 and 100 characters')
      .matches(/^[a-z0-9-]+$/)
      .withMessage('Slug can only contain lowercase letters, numbers, and hyphens'),
    body('translations').optional().isArray().withMessage('Translations must be an array'),
    body('translations.*.language_id').isInt().withMessage('Language ID must be an integer'),
    body('translations.*.title').optional().isLength({ max: 255 }).withMessage('Title must be less than 255 characters')
  ];

  static updatePageValidation = [
    param('id').isInt().withMessage('Page ID must be an integer'),
    body('slug').optional()
      .isLength({ min: 2, max: 100 })
      .withMessage('Slug must be between 2 and 100 characters')
      .matches(/^[a-z0-9-]+$/)
      .withMessage('Slug can only contain lowercase letters, numbers, and hyphens'),
    body('is_active').optional().isBoolean().withMessage('is_active must be a boolean'),
    body('translations').optional().isArray().withMessage('Translations must be an array')
  ];

  static deletePageValidation = [
    param('id').isInt().withMessage('Page ID must be an integer')
  ];
}

module.exports = PagesController;