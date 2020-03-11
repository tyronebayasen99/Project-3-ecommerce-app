require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("./public"));

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoStorefront";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
