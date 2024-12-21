/* 
Contributors:
    - Patrick Wilson 
*/

const Booking = require("../models/booking");

async function createBooking(req, res){
    try {
        const { meeting, dateRange, is_borrowed, user, name, item_borrow } = req.body;

        console.log({ meeting, dateRange, is_borrowed, user, name, item_borrow })

        if(!meeting || !dateRange) {
            return res.status(400).json({
                message: "Missing required fields: meeting, timeRange or user.",
              });
            }
        
        const similar_booking = await Booking.find( {meeting: meeting, user: user} ).exec();

        if(similar_booking.length > 0) {
            res.status(400).json({
                message: "Already created this booking"
            });
            return;
        }

        const newBooking = new Booking({
            meeting,
            dateRange,
            is_borrowed: is_borrowed || false,
            user: user || null,
            name: name || "",
            item_borrow: item_borrow || null,
        
        });

        await newBooking.save();

        res.status(201).json(newBooking);
        } catch (error) {
            console.error("Error creating Booking:", error);
            res.status(500).json({ message: "Internal server error" });
        }
}

module.exports = {createBooking};
