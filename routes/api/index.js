const router = require("express").Router();
const flightRoutes = require("./flights");
const authRoutes = require("./auth");

router.use("/flights", flightRoutes);
router.use("/auth", authRoutes);

module.exports = router;
