const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
    category_name: {
        type: String,
        required: true
    },
    category_list: {
        type: Array,
        required: true
    }
    },
    { collection: 'MenuCategory' }
);

const MenuCategory = mongoose.model('MenuCategory', categorySchema);
module.exports = MenuCategory;