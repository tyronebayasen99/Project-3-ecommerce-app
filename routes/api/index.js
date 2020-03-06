const router = require("express").Router();
const merchRoutes = require("./merch");

// Book routes
router.use("/merch", merchRoutes);

module.exports = router;