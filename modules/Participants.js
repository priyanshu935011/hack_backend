const mongoose = require("mongoose");
const { Schema } = mongoose;

const participantsSchema = new Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teams",
    require: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  collegeUniversity: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  studentIdCard: {
    type: Object,
    require: true,
  },
  photograph: {
    type: Object,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
});

const Participants = mongoose.model("participants", participantsSchema);
module.exports = Participants;
