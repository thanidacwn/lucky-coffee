const express = require('express');
const router = express.Router();
const { createCategoryHandler } = require('../controllers/category');

// GET all category
router.route('/all').get((req, res) => res.status(200).json({ 'message': 'get' }));

// GET all menu in category
router.route('/:category_name/menu').get((req, res) => res.status(200).json({ 'message': 'get' }));

// POST add category
router.route('/create').post(createCategoryHandler);

module.exports = router;