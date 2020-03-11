const router = require("express").Router();
const merchRoutes = require("./merch");
const clothesRoutes = require("./products");

// Book routes
router.use("/merch", merchRoutes);
router.use("/products", clothesRoutes);

module.exports = router;
