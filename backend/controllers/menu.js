const createMenu = require('../models/createMenu');
const createCategory = require('../models/createCategory');
const asyncHandler = require('express-async-handler');

const createMenuHandler = asyncHandler(async (req, res) => {
    try {
        if (!req.body.menu_name || !req.body.menu_category || !req.body.menu_image || !req.body.menu_sizes || !req.body.menu_sweetness || !req.body.menu_toppings || !req.body.start_price) {
            res.status(400).json({ message: "Invalid Body" });
        }
        const menu = await createMenu.findOne({ menu_name: req.body.menu_name });
        if (menu) {
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

const getAllMenuHandler = asyncHandler(async (req, res) => {
    try {
        const allMenu = await createMenu.find({}, { _id: 0, __v: 0 });
        res.status(200).json(allMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getRequestedMenuHandler = asyncHandler(async (req, res) => {
    try {
        const menu = await createMenu.findOne({ menu_name: req.params.menu_name }, { _id: 0, __v: 0 });
        if (menu) {
            res.status(200).json(menu);
        }
        else {
            res.status(404).json({ message: "Menu not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const editMenuHandler = asyncHandler(async (req, res) => {
    try {
        const menu = await createMenu.findOne({ menu_name: req.params.menu_name });

        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        const {
            menu_name,
            menu_category,
            menu_image,
            menu_sizes,
            menu_sweetness,
            menu_toppings,
            start_price
        } = req.body;

        if (!menu_name || !menu_category || !menu_image || !menu_sizes || !menu_sweetness || !menu_toppings || !start_price) {
            return res.status(400).json({ message: "Invalid Body" });
        }

        const updateMenu = await createMenu.updateOne({ menu_name: req.params.menu_name }, req.body);

        res.status(200).json(updateMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const deleteMenuHandler = asyncHandler(async (req, res) => {
    try {
        const menu = await createMenu.findOne({ menu_name: req.params.menu_name });

        if (!menu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        const deleteMenu = await createMenu.deleteOne({ menu_name: req.params.menu_name });

        res.status(200).json(deleteMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = { createMenuHandler, getAllMenuHandler, getRequestedMenuHandler, editMenuHandler, deleteMenuHandler };