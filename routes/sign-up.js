const express = require("express");
const router = express.Router();

const signUp = require("../controllers/sign-up");

router.get("/", (req, res) => {
    res.render("sign-up");
});

router.post("/", signUp);

module.exports = router;
