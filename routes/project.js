const express = require("express");
const router = express.Router();
const Project = require("../modules/Project");

router.post("/create", async (req, res) => {
  try {
    const { teamId, innovationPillar, title, description, presentation } =
      req.body;
    const project = await Project.create({
      teamId: teamId,
      title: title,
      innovationPillar: innovationPillar,
      description: description,
      presentation: presentation,
    });
    res.status(200).json("Project registered successfully");
  } catch {
    res.status(400).json("Internal Error");
  }
});

module.exports = router;
