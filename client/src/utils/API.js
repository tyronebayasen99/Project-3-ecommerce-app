import axios from "axios";

export default {
  saveFlight: function() {
    return axios.get("/api/save/" + id);
  }
};
