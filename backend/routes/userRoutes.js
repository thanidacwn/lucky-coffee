const express = require('express');
const router = express.Router();
const { createUserHandler, loginHandler } = require('../controllers/user');

// POST Create new user
router.route('/create').post(createUserHandler);

// POST Login
router.route('/login').post(loginHandler)

module.exports = router;