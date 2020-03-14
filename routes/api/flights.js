const app = require("express").Router();
const flightController = require("../../controllers/flightController");

app.route("/save/:id").post(flightController.saveFlight);

module.exports = app;
