const router = require("express").Router();
const merchController = require("../../controllers/merchandise_controller");

router
  .route("/")
  .get(merchController.findAll)
  .post(merchController.create);

router
  .route("/:id")
  .get(merchController.findById)
  .put(merchController.update)
  .delete(merchController.remove);

module.exports = router;
