const router = require("express").Router();
const flightController = require("../../controllers/flight_controller");

router
    .route("/save")
    .get(flightController.findAll)
    .post(flightController.create);


router
    .route("/:id")
    .get(flightController.findAll)
    .put(flightController.update)
    .delete(flightController.remove);

module.exports = router;