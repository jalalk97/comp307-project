const mongoose = require("mongoose");
const userSchema = require("./user");

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
        type:userSchema,
        required: true
    },

    multiple_people: {
        type:Boolean,
        required:true
    },

    is_weekly: {
        type:Boolean,
        required:true
    },
    url: {
        type:String,
        required:true
    }


})




const Meeting = mongoose.model("meeting", meetingSchema);

module.exports = Meeting;