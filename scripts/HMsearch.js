require("dotenv").config({ path: "../.env" });
const axios = require("axios");

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
let userSearch = "";

const productData = new Promise((resolve, reject) => {
  axios
    .get("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list", {
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
      },
      params: {
        categories: "men_all",
        country: "us",
        lang: "en",
        currentpage: "1",
        pagesize: "30"
      }
    })
    .then(response => {
      console.log(response.data.results);
      const productResponse = response.data.results;
      const productArr = [];

      for (let i = 0; i < productResponse.length; i++) {
        const productObj = {
          name: productResponse[i].name,
          price: productResponse[i].whitePrice,
          images: productResponse[i].images,
          sizes: productResponse[i].variantSizes
        };
        productArr.push(productObj);
      }
      console.log(productArr);
      resolve(productArr);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = productData;
