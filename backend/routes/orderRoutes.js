const express = require('express');
const router = express.Router();

// GET all category
router.route('/:order_queue').get((req, res) => res.status(200).json({ 'message': 'get' }));

module.exports = router;