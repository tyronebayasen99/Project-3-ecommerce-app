require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var authMiddleware = require("./auth");
var PORT = process.env.PORT || 3001;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(express.static("./public"));
app.use(authMiddleware());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoFlights";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

var routes = require("./routes/index");

app.use(routes);

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});