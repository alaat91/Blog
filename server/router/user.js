const express = require("express");

const { body } = require("express-validator");

const feedController = require("../controller/feed");

const userController = require("../controller/user");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/status", isAuth, userController.getUserStatus);

router.put("/status", isAuth, userController.updateStatus);

module.exports = router;
