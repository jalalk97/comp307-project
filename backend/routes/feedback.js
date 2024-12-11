const feedbackController = require("../controllers/feedback");

const router = require("express").Router();

router.post("/", feedbackController.createFeedback);

module.exports = router;