const createMenu = require('../models/createMenu');
const createCategory = require('../models/createCategory');
const asyncHandler = require('express-async-handler');

const createMenuHandler = asyncHandler(async (req, res) => {
    try {
        if (!req.body.menu_name || !req.body.menu_category || !req.body.menu_image || !req.body.menu_sizes || !req.body.menu_sweetness || !req.body.menu_toppings || !req.body.start_price) {
            res.status(400).json({ message: "Invalid Body" });
        }
        const menu = await createMenu.findOne({ menu_name: req.body.menu_name });
        if (menu){
            res.status(400).json({ message: "Menu already exists" });
        }
        else if (createMenu.validate(req.body)) {
            const newMenu = await createMenu.create(req.body);
            res.status(201).json(newMenu);
            const valid_category = ['coffee', 'tea', 'soda', 'juice', 'dessert', 'others']
            if (valid_category.includes(req.body.menu_category)) {
                const updateCategoryList = await createCategory.updateOne({ category_name: req.body.menu_category }, { $push: { category_list: req.body.menu_name } });
                console.log(updateCategoryList)
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = { createMenuHandler };