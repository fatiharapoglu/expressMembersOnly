const express = require("express");
const router = express.Router();

const getPremiumController = require("../controllers/get-premium");

router.get("/", (req, res) => {
    res.status(200).render("get-premium");
});

router.post("/", getPremiumController);

module.exports = router;
