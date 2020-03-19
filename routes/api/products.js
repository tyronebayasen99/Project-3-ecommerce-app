const app = require("express").Router();
const clothingController = require("../../controllers/clothingController");

app
  .route("/clothes")
  .get(clothingController.searchHM)
  .post(clothingController.insertProducts);

app.route("/").get(clothingController.findAll);

module.exports = app;
