const createMenu = require('../models/createMenu');
const asyncHandler = require('express-async-handler');

const createMenuHandler = asyncHandler(async (req, res) => {
    try {
        if (!req.body.menu_name || !req.body.menu_category || !req.body.menu_image || !req.body.menu_sizes || !req.body.menu_sweetness || !req.body.menu_toppings || !req.body.start_price) {
            res.status(400).json({ message: "Invalid Body" });
        }
        else if (createMenu.validate(req.body)) {
            const newMenu = await createMenu.create(req.body);
            res.status(201).json(newMenu);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = { createMenuHandler };