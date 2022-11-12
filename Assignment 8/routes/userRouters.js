const express = require("express");
const { registerUser } = require("../Controllers/userControllers");

const router = express.Router();

// router.route("/createUser").post(registerUser);
// router.route("/user").post(getUser);
// router.route("/updateUser").post(updateUser);
// router.route("/delete").post(deleteUser);

router.route("/").post(registerUser);

module.exports = router;
