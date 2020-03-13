const router = require("express").Router();
const flightRoutes = require("./flight");
const authRoutes = require("./auth");

router.use("/flight", flightRoutes);
router.use("/auth", authRoutes);

module.exports = router;