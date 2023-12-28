const express = require('express');
const router = express.Router();
const { uploadImageHandler, getImageHandler, uploadSingleHandler } = require('../controllers/image');

router.route('/upload').post(uploadSingleHandler, uploadImageHandler);

module.exports = router;