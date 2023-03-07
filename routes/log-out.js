const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(400).render("error", { err });
        }
        res.redirect("../");
    });
});

module.exports = router;
