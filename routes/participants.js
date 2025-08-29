const express = require("express");
const router = express.Router();
const Participants = require("../modules/Participants");

router.post("/create", async (req, res) => {
  try {
    const {
      teamId,
      fullName,
      email,
      phoneNumber,
      collegeUniversity,
      city,
      state,
      country,
      role,
      photograph,
      studentIdCard,
    } = req.body;
    const participants = await Participants.create({
      teamId: teamId,
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      collegeUniversity: collegeUniversity,
      city: city,
      state: state,
      country: country,
      role: role,
      photograph: photograph,
      studentIdCard: studentIdCard,
    });
    res.status(200).json(participants._id);
  } catch {
    res.status(400).json("Internal Error");
  }
});

router.post("/fetch", async (req, res) => {
  try {
    userId = req.header("lead");
    const check = Participants.findById(userId);
    data = await check;
    res.json(data);
  } catch {
    res.status(400).json("Internal Error");
  }
});

router.post("/team", async (req, res) => {
  try {
    teamId = req.header("teamId");
    const check = Participants.find({ teamId: teamId });
    data = await check;
    res.json(data);
  } catch {
    res.status(400).json("Internal Error");
  }
});

module.exports = router;
