const express = require('express');
const { createMenuHandler, getAllMenuHandler, getRequestedMenuHandler, editMenuHandler, deleteMenuHandler } = require('../controllers/menu');
const router = express.Router();

// GET all menu
router.route('/all').get(getAllMenuHandler);

// GET menu by name
router.route('/:menu_name').get(getRequestedMenuHandler);

// PUT update menu by name
router.route('/edit/:menu_name').put(editMenuHandler);

// DELETE menu by name
router.route('/delete/:menu_name').delete(deleteMenuHandler)

// GET menu analysis by year and month
router.route('/analysis/:year/:month').get((req, res) => res.status(200).json({ 'message': 'get' }));

// POST create menu
router.route('/create').post(createMenuHandler);

module.exports = router;