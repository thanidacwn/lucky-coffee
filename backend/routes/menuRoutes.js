const express = require('express');
const { createMenuHandler } = require('../controller/menu');
const router = express.Router();

// GET all menu
router.route('/all').get((req, res) => res.status(200).json({ 'message': 'get' }));

// GET menu by name
router.route('/:menu_name').get((req, res) => res.status(200).json({ 'message': 'get' }));

// GET menu analysis by year and month
router.route('/analysis/:year/:month').get((req, res) => res.status(200).json({ 'message': 'get' }));

// POST create menu
router.route('/create').post(createMenuHandler);

module.exports = router;