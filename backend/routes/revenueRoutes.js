const express = require('express');
const router = express.Router();

// GET specific monthly revenue at requested year
router.route('/monthly/:year/:month').get((req, res) => res.status(200).json({ 'message': 'get' }));

// GET specific yearly revenue at requested year
router.route('/yearly/:year').get((req, res) => res.status(200).json({ 'message': 'get' }));

module.exports = router;