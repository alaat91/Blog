const express = require("express");

const { body } = require("express-validator");

const authController = require("../controller/auth");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/signup", authController.signup);

router.post("/login", authController.login);

//router.get("/status", isAuth, authController.getUserStatus);

module.exports = router;
