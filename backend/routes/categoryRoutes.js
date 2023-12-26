const express = require('express');
const router = express.Router();
const { createCategoryHandler, getCategoryListHandler, getAllCategoryHandler } = require('../controllers/category');

// GET all category
router.route('/all').get(getAllCategoryHandler);

// GET all menu in category
router.route('/:category_name/menu').get(getCategoryListHandler);

// POST add category
router.route('/create').post(createCategoryHandler);

module.exports = router;