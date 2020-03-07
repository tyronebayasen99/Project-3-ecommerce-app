const app = require("express").Router();
const clothingController = require("../../controllers/clothingController");

app
  .route("/")
  .get(clothingController.searchHM)
  .post(clothingController.insertProducts);

module.exports = app;
