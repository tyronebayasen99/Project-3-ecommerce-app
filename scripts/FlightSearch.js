require("dotenv").config({ path: "../.env" });
const axios = require("axios");

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

let start = "SAC";
let end = "JFK";
let flightDate = "2020-03-07";

const flightData = new Promise((resolve, reject) => {
  axios
    .get("https://tripadvisor1.p.rapidapi.com/flights/create-session", {
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
      },
      params: {
        d1: start,
        o1: end,
        dd1: flightDate
      }
    })
    .then(response => {
      console.log(response.data);
    });
});

module.exports = flightData;
