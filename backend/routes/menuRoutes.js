const express = require('express');
const router = express.Router();
const createMenu = require('../models/createMenu');

// GET all menu
router.route('/all').get((req, res) => res.status(200).json({ 'message': 'get' }));

// GET menu by name
router.route('/:menu_name').get((req, res) => res.status(200).json({ 'message': 'get' }));

// POST create menu
router.route('/create').post(async (req, res) => {
    try {
        if (createMenu.validate(req.body)){
            const newMenu = await createMenu.create(req.body);
            res.status(201).json(newMenu);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;