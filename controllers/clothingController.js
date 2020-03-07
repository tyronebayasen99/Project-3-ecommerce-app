const db = require("../models");
const productData = require("../scripts/HMsearch");

module.exports = {
  searchHM: (req, res) => {
    productData.then(results => {
      console.log(results);
      res.json(results);
    });
  },
  insertProducts: (req, res) => {
    productData.then(productResults => {
      // console.log(productResults);
      db.Products.insertMany(productResults).then(insertedProducts => {
        console.log("Products Inserted!");
        res.json(insertedProducts);
      });
    });
  }
};
