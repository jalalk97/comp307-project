const mongoose = require("mongoose");
const meetingSchema = require("./meeting");

const bookingSchema = new mongoose.Schema ({
    meeting : {
        type: meetingSchema,
        require:true
    },
    //time will be time indicated in meeting

    //remeber if a borrowing, end date will be return date
    dateRange: {
        startDate: {type: Date, required: true},
        endDate: {type: Date, required: true}
    },

    is_borrowed: {
        type:Boolean,
        require:true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    item_borrow: {
        type:String
    }
})

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
