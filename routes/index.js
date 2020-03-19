const path = require("path");
const app = require("express").Router();
const apiRoutes = require("./api");

app.use("/api", apiRoutes);

// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;
