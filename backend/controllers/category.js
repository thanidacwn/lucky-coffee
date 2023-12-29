const createCategory = require('../models/createCategory');
const asyncHandler = require('express-async-handler');

const createCategoryHandler = asyncHandler(async (req, res) => {
    try {
        if (!req.body.category_name || !req.body.category_list) {
            res.status(400).json({ message: "Invalid Body" });
        }
        else if (createCategory.validate(req.body)) {
            const newCategory = await createCategory.create(req.body);
            res.status(201).json(newCategory);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getCategoryListHandler = asyncHandler(async (req, res) => {
    try {
        const categoryName = await createCategory.findOne({ category_name: { $ne: null, $eq: req.params.category_name } });
        if (categoryName) {
            res.status(200).json(categoryName.category_list);
        }
        else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getAllCategoryHandler = asyncHandler(async (req, res) => {
    try {
        const allCategory = await createCategory.find({}, { _id: 0, __v: 0 });
        res.status(200).json(allCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = { createCategoryHandler, getCategoryListHandler, getAllCategoryHandler };