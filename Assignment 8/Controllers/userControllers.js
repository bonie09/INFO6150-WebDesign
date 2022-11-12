const asyncHandler = require("express-async-handler");
const { findByIdAndDelete, findOneAndDelete } = require("../models/userModel");
const User = require("../models/userModel");

const editUser = asyncHandler(async (req, res) => {
  //   console.log("something happened");
  let upid = req.params.id;
  let upname = req.body.name;
  let uppassword = req.body.password;
  const userUpdate = await User.findByIdAndUpdate(
    { _id: upid },
    { $set: { name: upname, password: uppassword } }
  )
    .then((item) => {
      res.status(201).send({ message: "User Updated" });
    })
    .catch((err) => {
      res.status(400).send({ message: "User does not exist" });
    });
  //   console.log(upid, upname, uppassword);
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!!");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  let param_delemail = req.params.id;
  let delemail = req.body.email;
  console.log(param_delemail, delemail);

  const deleteUser = await User.findOneAndDelete({ email: delemail })
    .then((data) => {
      if (data == null) {
        res.status(400).send({ message: "User does not exist" });
      }
      res.status(201).send({ message: "User Deleted" });
    })
    .catch((err) => {
      res.status(400).send({ message: "Something went wrong" });
    });
});
module.exports = { registerUser, editUser, deleteUser };
