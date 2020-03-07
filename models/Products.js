const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Object
  },
  images: {
    type: Array
  },
  size: {
    type: Array
  }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
