const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
    res.status(200).render("index", { user: req.user });
});

router.post(
    "/",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/log-in-failed",
    })
);

module.exports = router;
