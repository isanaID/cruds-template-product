const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

let product = mongoose.model('Product', productSchema);
module.exports = product;