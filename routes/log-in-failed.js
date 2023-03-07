const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(400).render("log-in-failed", {
        err: "Username/password do not match. Please try again.",
    });
});

module.exports = router;
