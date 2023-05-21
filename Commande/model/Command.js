const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Command = new Schema({
    products: { type: [String] },
    email: String,
    total_price: Number,
}, { timestamp: true })

module.exports = mongoose.model('Command', Command);