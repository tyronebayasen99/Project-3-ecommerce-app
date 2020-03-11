const router = require("express").Router();
const merchRoutes = require("./merch");
const authRoutes = require("./auth");

router.use("/merch", merchRoutes);
router.use("/auth", authRoutes);

module.exports = router;