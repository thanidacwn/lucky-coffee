const express = require('express');
const router = express.Router();

router.route('/all').get((req, res) => res.status(200).json({'message': 'get'}));
router.route('/').post((req, res) => res.status(200).json(req.body));
router.route('/').put((req, res) => res.status(200).json('put'));
router.route('/').delete((req, res) => res.status(200).json('delete'));

module.exports = router;