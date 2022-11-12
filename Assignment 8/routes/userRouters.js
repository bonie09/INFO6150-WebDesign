const express = require("express");
const {
  registerUser,
  editUser,
  deleteUser,
} = require("../Controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/:id").put(editUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
