const router = require("express").Router();
const authController = require("../../controllers/auth_controller");

router.route("/").get(authController.findAll);

router.route("/signup").post(authController.signUp);

router.route("/:id").get(authController.findById);

router.route("/login").post(authController.logIn);

router.route("/logout").get(authController.logOut);

module.exports = router;
