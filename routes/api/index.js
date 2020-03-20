const router = require("express").Router();
const flightRoutes = require("./flights");
const flight_routes = require("./flight");
const authRoutes = require("./auth");

router.use("/flights", flightRoutes);
router.use("/auth", authRoutes);
router.use("/flight", flight_routes);

module.exports = router;
