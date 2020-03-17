import axios from "axios";

export default {
  searchFlights: function() {
    return axios.get();
  },
  saveFlight: function() {
    return axios.post("/api/save/" + id);
  }
};
