const db = require("../models");

require("dotenv").config({ path: "../.env" });
const axios = require("axios");

module.exports = {
  saveFlight: (req, res) => {
    db.Flights.create(req.body).then(savedFlight => console.log(savedFlight));
  },

  searchFlight: (req, res) => {
    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
    console.log(req.params);

    let start = req.params.depart;
    let end = req.params.arrival;

    let departureDate = "2020-04-20";
    // let returnDate = req.params.returnDate;

    const flightPromise = new Promise((resolve, reject) => {
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
            dd1: departureDate
            // dd2: returnDate
          }
        })
        .then(response => {
          const flightKey = response.data.search_params.sid;
          const flightURL = response.data.search_url;
          const flightInfo = [flightKey, flightURL];
          return flightInfo;
        })
        .then(x => {
          console.log(x);
          const flightPromise2 = new Promise((resolve2, reject2) => {
            axios
              .get("https://tripadvisor1.p.rapidapi.com/flights/poll", {
                headers: {
                  "content-type": "application/json",
                  "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                  "x-rapidapi-key": RAPIDAPI_KEY
                },
                params: {
                  sid: x[0]
                }
              })
              .then(response => {
                let itinArr = [];
                var itineraries = response.data.itineraries;
                // console.log(itineraries);
                try {
                  response.data.itineraries.forEach(e => {
                    let flightPath = {};
                    const flightInfo = e.f[0];
                    const itinData = e.l[0];

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
                      flightSchedule: flightPath,
                      departing: response.data.search_params.s[0].o,
                      arriving: response.data.search_params.s[0].d,
                      ticketURL: x[1]
                    };
                    itinArr.push(itinObj);
                  });
                  // console.log(itinArr);
                } catch (e) {
                  // console.log(e);
                }
                resolve2(itinArr);
              });
          });
          flightPromise2.then(results => {
            res.json(results);
          });
        });
    });
  }
};
