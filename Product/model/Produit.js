const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    description: String,
    price: Number,
    // created_at: {
    //     type: Date,
    //     default: Date.now(),
    //     },
}, { timestamp: true })

module.exports = mongoose.model('Product', Product);