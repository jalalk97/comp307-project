const mongoose = require("mongoose");
const meetingSchema = require("./meeting");

const alternateSchema = mongoose.Schema({
  meeting: {
    type: meetingSchema,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  alt_time: {
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  dateRange: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
});

const AlternateMeeting = mongoose.model("AlternateMeeting", alternateSchema);
module.exports(AlternateMeeting);
