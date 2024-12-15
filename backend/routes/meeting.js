const meetingController = require("../controllers/meeting");

const router = require("express").Router();

router.get("/:url", meetingController.getMeeting);

module.exports = router;
