const express = require("express");
const router = express.Router();

const newMessage = require("../controllers/new-message");

router.get("/", (req, res) => {
    if (res.locals.currentUser) {
        return res.status(200).render("new-message");
    }
    res.status(401).render("error", { err: "Authorization error, please log in." });
});

router.post("/", newMessage);

module.exports = router;
