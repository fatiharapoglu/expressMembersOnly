const express = require("express");
const router = express.Router();
const passport = require("passport");

const getAllMessages = require("../controllers/get-all-messages");

router.get("/", getAllMessages);

router.post(
    "/",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/log-in-failed",
    })
);

module.exports = router;
