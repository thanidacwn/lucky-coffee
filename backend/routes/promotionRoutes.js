const express = require('express');
const { createPromotionHandler, getAllPromotionHandler, editPromotionHandler, deletePromotionHandler } = require('../controllers/promotion');
const router = express.Router();

// GET all promotion
router.route('/all').get(getAllPromotionHandler);

// POST create promotion
router.route('/create').post(createPromotionHandler);

// PUT update promotion by name
router.route('/edit/:promotion_name').put(editPromotionHandler);

// DELETE promotion by name
router.route('/delete/:promotion_name').delete(deletePromotionHandler);

module.exports = router;