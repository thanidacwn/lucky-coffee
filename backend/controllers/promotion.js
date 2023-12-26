const createPromotion = require('../models/createPromotion');
const asyncHandler = require('express-async-handler');

const createPromotionHandler = asyncHandler(async (req, res) => {
    try {
        if (!req.body.promotion_name || !req.body.promotion_type || !req.body.promotion_discount || !req.body.promotion_expired || !req.body.promotion_image) {
            res.status(400).json({ message: "Invalid Body" });
        }
        const promotion = createPromotion.findOne({ promotion_name: req.body.promotion_name });
        if (promotion) {
            res.status(400).json({ message: "Promotion already exists" });
        }
        else if (createPromotion.validate(req.body)) {
            const newPromotion = await createPromotion.create(req.body);
            res.status(201).json(newPromotion);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getAllPromotionHandler = asyncHandler(async (req, res) => {
    try {
        const allPromotion = await createPromotion.find({}, { _id: 0, __v: 0 });
        res.status(200).json(allPromotion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = { createPromotionHandler, getAllPromotionHandler };