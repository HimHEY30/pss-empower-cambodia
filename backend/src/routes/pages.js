const express = require('express');
const PagesController = require('../controllers/pagesController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/:slug', PagesController.getPageValidation, PagesController.getPage);

// Protected routes (Admin/Editor)
router.use(protect);
router.use(authorize('admin', 'editor'));

router.get('/', PagesController.getPages);
router.post('/', PagesController.createPageValidation, PagesController.createPage);
router.put('/:id', PagesController.updatePageValidation, PagesController.updatePage);

// Admin only
router.delete('/:id', authorize('admin'), PagesController.deletePageValidation, PagesController.deletePage);

module.exports = router;