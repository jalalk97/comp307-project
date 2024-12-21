const mongoose = require("mongoose");

/* 
Contributors:
    - Patrick Wilson 
*/


const bookingSchema = new mongoose.Schema ({
    meeting : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meeting',
        required: true
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
    },

    name: {
        type:String,
    },

    item_borrow: {
        type:String
    }
})

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
