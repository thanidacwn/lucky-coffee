const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema(
    {
    menu_name: {
        type: String,
        required: true
    },
    menu_category: {
        type: String,
        required: true
    },
    menu_image: {
        type: String,
        required: true
    },
    menu_sizes: {
        type: Array,
        required: true
    },
    menu_sweetness: {
        type: Array,
        required: true
    },
    menu_toppings: {
        type: Array,
        required: true
    },
    start_price: {
        type: Number,
        required: true
    }
    },
    { collection: 'Menu' }
);

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;