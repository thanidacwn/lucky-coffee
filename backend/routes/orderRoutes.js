const express = require('express');
const router = express.Router();

// GET all order
router.route('/all').get((req, res) => res.status(200).json({ 'message': 'get' }));

// GET specific order
router.route('/:order_queue').get((req, res) => res.status(200).json({ 'message': 'get' }));

module.exports = router;