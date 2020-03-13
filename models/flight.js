const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    date: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    saved: { type: Boolean, required: true, default: false },
    note: [{ type: Schema.Types.ObjectId, ref: "Note" }]
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;