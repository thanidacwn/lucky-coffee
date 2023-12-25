const express = require('express');
const router = express.Router();

router.use('/menu', require('./menuRoutes'));
router.use('/category', require('./categoryRoutes'));
router.use('/order', require('./orderRoutes'));

module.exports = router;