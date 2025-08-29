const mongoose = require("mongoose");
// require("dotenv").config();
const connected = () => {
  mongoose.connect(
    "mongodb+srv://priyanshugiri63:KkBjEUe5njFZM2k4@cluster0.m1mclcw.mongodb.net/hackathon"
  );
};
module.exports = connected;
