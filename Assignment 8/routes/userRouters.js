const express = require("express");
const { registerUser, editUser } = require("../Controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/:id").put(editUser);

module.exports = router;
