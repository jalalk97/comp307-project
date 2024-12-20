const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  dateRange: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },

  timeRange: {
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },

  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  multiple_people: {
    type: Boolean,
    required: true,
  },

  is_weekly: {
    type: Boolean,
    required: true,
  },

  to_borrow: {
    type: Boolean,
    required: false,
  },

  url: String,
});

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://comp307-project-ibhi.onrender.com";

meetingSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.url = `${API_URL}/meeting/${returnedObject.id}`;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
