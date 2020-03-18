import axios from "axios";

export default {
  searchFlights: function(depart, arrival) {
    return axios.get("/api/flights/search/" + depart + "-" + arrival);
  },
  saveFlight: function(id) {
    return axios.post("/api/save/" + id);
  }
};
