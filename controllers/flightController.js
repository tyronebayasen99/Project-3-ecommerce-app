const db = require("../models");

module.exports = {
  saveFlight: (req, res) => {
    db.Flights.create(req.body).then(savedFlight => console.log(savedFlight));
  }
};
