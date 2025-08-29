const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Team = mongoose.model("team", teamSchema);
module.exports = Team;
