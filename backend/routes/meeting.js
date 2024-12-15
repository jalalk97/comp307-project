const meetingController = require("../controllers/meeting");

const router = require("express").Router();

router.get("/:url", meetingController.getMeeting);
router.post("/", meetingController.createMeeting);
router.put("/", meetingController.updateMeeting);

module.exports = router;
