const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  seatPrice: {
    type: String,
    require: true
  },
  flightSchedule: {
    type: Object
  }
});

const Flights = mongoose.model("Products", flightSchema);

module.exports = Flights;
