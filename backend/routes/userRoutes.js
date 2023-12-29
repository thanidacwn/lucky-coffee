const express = require('express');
const router = express.Router();
const { createUserHandler } = require('../controllers/user');

// POST Create new user
router.route('/create').post(createUserHandler);

module.exports = router;