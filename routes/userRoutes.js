const express = require("express");
const authController = require("../controllers/authController");
const router = require("./postRoutes");

router.post("/signup", authController.signUp); // Use authController.signup to be able to send the requests to signup
router.post("/login", authController.login); // Use authController.signup to be able to send the requests to login

module.exports = router;
