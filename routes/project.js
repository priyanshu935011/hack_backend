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
      status: 0,
    });
    res.status(200).json("Project registered successfully");
  } catch {
    res.status(400).json("Internal Error");
  }
});

router.post("/fetch", async (req, res) => {
  try {
    const teamId = req.header("teamId");
    const data = await Project.find({ teamId: teamId });

    if (!data || data.length === 0) {
      return res
        .status(404)
        .json({ message: "No projects found for this teamId" });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/update", async (req, res) => {
  try {
    const { projectId } = req.body;
    const checkProject = await Project.findById({ _id: projectId });
    if (checkProject) {
      const projectUpdate = await Project.updateOne(
        { _id: projectId },
        { status: 1 }
      );
      res.status(200).json("Success");
    }
  } catch {
    res.status(400).json("Internal Error");
  }
});

module.exports = router;
