const express = require("express");
const router = express.Router();
const Team = require("../modules/Team");

router.post("/create", async (req, res) => {
  try {
    const { name } = req.body;
    const team = await Team.create({
      name: name,
    });
    res.status(200).json(team._id);
  } catch {
    res.status(400).json("Internal Error");
  }
});

router.post("/fetch", async (req, res) => {
  try {
    const teamId = req.header("teamId");
    const check = Team.findById(teamId);
    data = await check;
    res.json(data.name);
  } catch {
    res.status(400).json("Internal Error");
  }
});

module.exports = router;
