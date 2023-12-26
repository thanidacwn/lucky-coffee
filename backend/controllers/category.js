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

module.exports = { createCategoryHandler };