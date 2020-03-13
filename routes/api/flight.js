const router = require("express").Router();
const flightController = require("../../controllers/flight_controller");

router
    .route("/")
    .get(flightController.findAll)
    .post(flightController.create);


router
    .route("/:id")
    .get(flightController.findById)
    .put(flightController.update)
    .delete(flightController.remove);

module.exports = router;