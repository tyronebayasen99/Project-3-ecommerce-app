const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  seatPrice: {
    type: String,
    require: true
  },
  layovers: {
    type: Number,
    require: true
  },
  token: {
    type: String,
    require: true
  },
  destination: {
    type: String,
    require: true
  },
  departure: {
    type: String,
    require: true
  }
});

const Flights = mongoose.model("Flights", flightSchema);

module.exports = Flights;
