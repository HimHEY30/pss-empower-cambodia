const { body, param, query, validationResult } = require('express-validator');
const MenuService = require('../services/menuService');

class MenusController {
  // @desc    Get menu by name
  // @route   GET /api/menus/:name
  // @access  Public
  static async getMenu(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { name } = req.params;
      const { lang = 'en' } = req.query;

      const menu = await MenuService.getMenuByName(name, lang);

      res.status(200).json({
        success: true,
        data: menu
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Get all menus
  // @route   GET /api/menus
  // @access  Private
  static async getMenus(req, res, next) {
    try {
      const menus = await MenuService.getAllMenus();

      res.status(200).json({
        success: true,
        count: menus.length,
        data: menus
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Create menu
  // @route   POST /api/menus
  // @access  Private (Admin/Editor)
  static async createMenu(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const menu = await MenuService.createMenu(req.body);

      res.status(201).json({
        success: true,
        data: menu
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Update menu
  // @route   PUT /api/menus/:id
  // @access  Private (Admin/Editor)
  static async updateMenu(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { id } = req.params;
      const menu = await MenuService.updateMenu(id, req.body);

      res.status(200).json({
        success: true,
        data: menu
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Delete menu
  // @route   DELETE /api/menus/:id
  // @access  Private (Admin only)
  static async deleteMenu(req, res, next) {
    try {
      const { id } = req.params;
      await MenuService.deleteMenu(id);

      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Create menu item
  // @route   POST /api/menus/:menuId/items
  // @access  Private (Admin/Editor)
  static async createMenuItem(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { menuId } = req.params;
      const itemId = await MenuService.createMenuItem(menuId, req.body);

      res.status(201).json({
        success: true,
        data: { id: itemId }
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Update menu item
  // @route   PUT /api/menus/items/:id
  // @access  Private (Admin/Editor)
  static async updateMenuItem(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { id } = req.params;
      await MenuService.updateMenuItem(id, req.body);

      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(error);
    }
  }

  // @desc    Delete menu item
  // @route   DELETE /api/menus/items/:id
  // @access  Private (Admin only)
  static async deleteMenuItem(req, res, next) {
    try {
      const { id } = req.params;
      await MenuService.deleteMenuItem(id);

      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(error);
    }
  }

  // Validation rules
  static getMenuValidation = [
    param('name').notEmpty().withMessage('Menu name is required'),
    query('lang').optional().isIn(['en', 'km']).withMessage('Language must be en or km')
  ];

  static createMenuValidation = [
    body('name')
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be between 2 and 100 characters')
      .matches(/^[a-z0-9-_]+$/)
      .withMessage('Name can only contain lowercase letters, numbers, hyphens, and underscores'),
    body('items').optional().isArray().withMessage('Items must be an array')
  ];

  static updateMenuValidation = [
    param('id').isInt().withMessage('Menu ID must be an integer'),
    body('name').optional()
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be between 2 and 100 characters')
      .matches(/^[a-z0-9-_]+$/)
      .withMessage('Name can only contain lowercase letters, numbers, hyphens, and underscores'),
    body('is_active').optional().isBoolean().withMessage('is_active must be a boolean')
  ];

  static deleteMenuValidation = [
    param('id').isInt().withMessage('Menu ID must be an integer')
  ];

  static createMenuItemValidation = [
    param('menuId').isInt().withMessage('Menu ID must be an integer'),
    body('order').optional().isInt({ min: 0 }).withMessage('Order must be a non-negative integer'),
    body('url').optional().isLength({ max: 500 }).withMessage('URL must be less than 500 characters'),
    body('translations').isArray().withMessage('Translations must be an array'),
    body('translations.*.language_id').isInt().withMessage('Language ID must be an integer'),
    body('translations.*.label').notEmpty().withMessage('Label is required')
  ];

  static updateMenuItemValidation = [
    param('id').isInt().withMessage('Menu item ID must be an integer'),
    body('order').optional().isInt({ min: 0 }).withMessage('Order must be a non-negative integer'),
    body('url').optional().isLength({ max: 500 }).withMessage('URL must be less than 500 characters'),
    body('is_active').optional().isBoolean().withMessage('is_active must be a boolean'),
    body('translations').optional().isArray().withMessage('Translations must be an array')
  ];

  static deleteMenuItemValidation = [
    param('id').isInt().withMessage('Menu item ID must be an integer')
  ];
}

module.exports = MenusController;