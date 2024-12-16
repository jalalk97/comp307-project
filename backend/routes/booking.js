const bookingController = require ("../controllers/booking");

const router = require("express").Router();

router.post("/", bookingController.createBooking);

module.exports = router;