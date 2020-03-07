const axios = require("axios");

const diffBotData = new Promise((resolve, reject) => {
  axios
    .get("http://catalog.bizrate.com/services/catalog/v1/")
    .then(response => {
      console.log(response);
    });
});

module.exports = diffBotData;
