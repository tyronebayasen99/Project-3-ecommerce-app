const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

const Merch = mongoose.model("Merch", merchSchema);

module.exports = Merch;