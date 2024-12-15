const meetingController = require("../controllers/meeting");

const router = require("express").Router();

router.get("/", meetingController.getMeeting);

module.exports = router;
