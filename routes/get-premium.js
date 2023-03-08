const express = require("express");
const router = express.Router();

const getPremiumController = require("../controllers/get-premium");

router.get("/", (req, res) => {
    if (!res.locals.currentUser) {
        return res.status(401).render("error", { err: "Authorization error, please log in." });
    }
    res.status(200).render("get-premium");
});

router.post("/", getPremiumController);

module.exports = router;
