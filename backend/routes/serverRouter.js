const express = require('express');
const router = express.Router();

router.use('/item', require('./itemRoutes'));

module.exports = router;