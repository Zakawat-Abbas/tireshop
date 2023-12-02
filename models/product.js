const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    inStock: {
        type: Number,
        required: true,
        default: 0
    },
    deliveryTime: {
        type: String,
    },
    label: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    imgUrlLarge: {
        type: String,
    },

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;

