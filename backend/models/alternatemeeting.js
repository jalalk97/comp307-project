const mongoose = require("mongoose");
const userSchema = require("./user");
const meetingSchema = require("./meeting");

const alternateSchema = mongoose.Schema({
    meeting : {
        type:meetingSchema,
        require:true
    },
    user : {
        type:userSchema,
        require:true
    },
    alt_time : {
        startTime: {type: String, required: true},
        endTime: {type: String, required: true}
    },
    dateRange: {
        startDate: {type: Date, required: true},
        endDate: {type: Date, required: true}
    }
})

const AlternateMeeting = mongoose.model("AlternateMeeting", alternateSchema);
module.exports(AlternateMeeting);