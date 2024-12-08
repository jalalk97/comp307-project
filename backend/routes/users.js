const usersController = require("../controllers/users");

const router = require("express").Router();

router.post("/", usersController.createUser);

module.exports = router;
