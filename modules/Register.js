const mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;

const registerSchema = new Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  teamId: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
  },
});

const Register = mongoose.model("register", registerSchema);
module.exports = Register;
