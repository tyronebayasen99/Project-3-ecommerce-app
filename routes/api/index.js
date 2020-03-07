const app = require("express").Router();

const bookRoute = require("./products");

app.use("/products", bookRoute);

module.exports = app;
