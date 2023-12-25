const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema(
    {
    promotion_name: {
        type: String,
        required: true
    },
    promotion_type: {
        type: String,
        required: true
    },
    promotion_discount: {
        type: Number,
        required: true
    },
    promotion_expired: {
        type: Date,
        required: true
    },
    promotion_image: {
        type: String,
        required: true
    }
    },
    { collection: 'Promotion' }
);

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;