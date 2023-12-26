const express = require('express');
const router = express.Router();
const { uploadImageHandler, getImageHandler } = require('../controllers/imageController');
const { upload } = require('../utils/multerConfig');

router.route('/upload').post(upload.single(req.file.fieldname), uploadImageHandler);
