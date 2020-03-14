require("dotenv").config({ path: "../.env" });
const axios = require("axios");

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

let start = "SMF";
let end = "JFK";
let flightDate = "2020-04-20";

function flightData() {
  axios
    .get("https://tripadvisor1.p.rapidapi.com/flights/create-session", {
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
      },
      params: {
        d1: end,
        o1: start,
        dd1: flightDate
      }
    })
    .then(response => {
      const flightKey = response.data.search_params.sid;
      const flightURL = response.data.search_url;
      console.log(flightKey, flightURL);
      getFlightInfo(flightKey);
    });
}

function getFlightInfo(flightKey) {
  console.log(flightKey);
  const flightId = flightKey;
  let flightPromise = new Promise((resolve, reject) => {
    axios
      .get("https://tripadvisor1.p.rapidapi.com/flights/poll", {
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": RAPIDAPI_KEY
        },
        params: {
          sid: flightId
        }
      })
      .then(response => {
        let itinArr = [];
        // var itineraries = response.data.itineraries;
        // console.log(itineraries);
        try {
          response.data.itineraries.forEach(e => {
            let flightPath = {};
            const flightInfo = e.f[0];
            const itinData = e.l[0];
            // const priceData = itinData.pr
            // console.log(itineraries[i]);

            if (e.f[0].l.length > 1) {
              for (let x = 0; x < flightInfo.l.length; x++) {
                flightPath[x] = {};
                flightPath[x].departingAirport = flightInfo.l[x].da;
                flightPath[x].arrivalAirport = flightInfo.l[x].aa;
                flightPath[x].departTime = flightInfo.l[x].dd;
                flightPath[x].arriveTime = flightInfo.l[x].ad;
              }
            }
            // console.log(flightPath);
            const itinObj = {
              seatPrice: itinData.pr.dp,
              // seatType: itinData.fb,
              flightSchedule: flightPath
            };
            itinArr.push(itinObj);
            console.log(itinArr);
          });
        } catch (e) {
          console.log(e);
        }
        resolve(itinArr);
      });
  });
}

flightData();

module.exports = flightData;