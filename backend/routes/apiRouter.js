const express = require('express');
const router = express.Router();

router.use('/menu', require('./menuRoutes'));
router.use('/category', require('./categoryRoutes'));
router.use('/order', require('./orderRoutes'));
router.use('/revenue', require('./revenueRoutes'));
router.use('/promotion', require('./promotionRoutes'));
router.use('/image', require('./imageRoutes'));

module.exports = router;