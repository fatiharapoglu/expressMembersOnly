const express = require("express");
const router = express.Router();
const passport = require("passport");

const getAllMessages = require("../controllers/get-all-messages");
const deleteMessage = require("../controllers/delete-message");

router.get("/", getAllMessages);

router.post(
    "/",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/log-in-failed",
    })
);

router.delete("/:id", deleteMessage);

module.exports = router;
