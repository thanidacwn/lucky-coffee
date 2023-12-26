const express = require('express');
const { createPromotionHandler, getAllPromotionHandler } = require('../controllers/promotion');
const router = express.Router();

// GET all promotion
router.route('/all').get(getAllPromotionHandler);

// POST create promotion
router.route('/create').post(createPromotionHandler);

module.exports = router;