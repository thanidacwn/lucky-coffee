const express = require('express');
const router = express.Router();
const createPromotion = require('../models/createPromotion');

// GET all promotion
router.route('/all').get((req, res) => res.status(200).json({ 'message': 'get' }));

// POST create promotion
router.route('/create').post(async (req, res) => {
    try {
        if (createPromotion.validate(req.body)){
            const newPromotion = await createPromotion.create(req.body);
            res.status(201).json(newMenu);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;