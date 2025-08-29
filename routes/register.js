const express = require("express");
const router = express.Router();
const Register = require("../modules/Register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_VERIFY = "ShardaUniversity";
//-------------------------------------------Create User-----------------------------------//
router.post("/create", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const checkEmail = await Register.findOne({ email: email });
    if (!checkEmail) {
      salt = 10;
      securePass = await bcrypt.hash(password, salt);
      const user = await Register.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: securePass,
        date: Date.now(),
      });
      res.status(200).json(user._id);
    } else {
      res.status(400).json("Email already registered");
    }
  } catch {
    res.status(400).json("Internal Error");
  }
});

//-------------------------------------------Login User-----------------------------------//
router.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    const accountCheck = await Register.findOne({ email: email });
    if (accountCheck) {
      passCheck = await bcrypt.compare(password, accountCheck.password);
      if (!passCheck) {
        res.status(400).json("Enter correct password");
      } else {
        res.status(200).json(accountCheck);
      }
    } else {
      res.status(400).json("Enter correct login credentials");
    }
  } catch {
    res.status(400).json("Internal Error");
  }
});

//-------------------------------------------Add Team-----------------------------------//
router.post("/team", async (req, res) => {
  try {
    const { teamId, userId } = req.body;
    const checkUser = await Register.findById({ _id: userId });
    if (checkUser) {
      const teamUpdate = await Register.updateOne(
        { _id: userId },
        { teamId: teamId }
      );
      res.status(200).json("Success");
    }
  } catch {
    res.status(400).json("Internal Error");
  }
});

module.exports = router;
