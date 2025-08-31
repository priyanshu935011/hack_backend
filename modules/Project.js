const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teams",
    require: true,
  },
  innovationPillar: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  presentation: {
    type: String,
    require: true,
  },
   status: {
    type: Number,
    require: true,
  },
});

const Project = mongoose.model("project", ProjectSchema);
module.exports = Project;

