const express = require("express");
const router = express.Router();
const Contact = require("../modules/Contact");

//-------------------------------------------Add Contact-----------------------------------//
router.post("/create", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = Contact.create({
      name: name,
      email: email,
      message: message,
      date: Date.now(),
    });
    res.status(200).json("We will get back to you shortly.");
  } catch (error) {
    res.status(401).json("Internal Error");
  }
});

module.exports = router;
