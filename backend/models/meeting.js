const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
    dateRange: {
        startDate: {type: Date, required: true},
        endDate: {type: Date, required: true}
    },

    timeRange: {
        startTime: {type: String, required: true},
        endTime: {type: String, required: true}
    },

    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    multiple_people: {
        type:Boolean,
        required:true
    },

    is_weekly: {
        type:Boolean,
        required:true
    },
    url: String,
})

meetingSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});


const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
