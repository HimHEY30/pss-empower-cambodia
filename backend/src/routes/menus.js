const express = require('express');
const MenusController = require('../controllers/menusController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/:name', MenusController.getMenuValidation, MenusController.getMenu);

// Protected routes (Admin/Editor)
router.use(protect);
router.use(authorize('admin', 'editor'));

router.get('/', MenusController.getMenus);
router.post('/', MenusController.createMenuValidation, MenusController.createMenu);
router.put('/:id', MenusController.updateMenuValidation, MenusController.updateMenu);

// Menu items
router.post('/:menuId/items', MenusController.createMenuItemValidation, MenusController.createMenuItem);
router.put('/items/:id', MenusController.updateMenuItemValidation, MenusController.updateMenuItem);

// Admin only
router.delete('/:id', authorize('admin'), MenusController.deleteMenuValidation, MenusController.deleteMenu);
router.delete('/items/:id', authorize('admin'), MenusController.deleteMenuItemValidation, MenusController.deleteMenuItem);

module.exports = router;