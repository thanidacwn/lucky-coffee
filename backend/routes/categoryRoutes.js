const express = require('express');
const router = express.Router();

// GET all category
router.route('/all').get((req, res) => res.status(200).json({ 'message': 'get' }));

// GET all menu in category
router.route('/:category_name/menu').get((req, res) => res.status(200).json({ 'message': 'get' }));

module.exports = router;