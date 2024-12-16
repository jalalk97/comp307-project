const meetingController = require("../controllers/meeting");
const { userExtractor } = require("../utils/middleware");

const router = require("express").Router();

router.get("/availability/:url", meetingController.getAvailability);
router.get("/:url", meetingController.getMeeting);
router.post("/", meetingController.createMeeting);
router.put("/", meetingController.updateMeeting);
router.delete("/:id", userExtractor, meetingController.removeMeeting);

module.exports = router;
