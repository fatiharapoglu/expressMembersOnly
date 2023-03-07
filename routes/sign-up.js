const express = require("express");
const router = express.Router();

const signUp = require("../controllers/sign-up");
const validatePassword = require("../middleware/validate");
const checkValidationErrors = require("../middleware/validation-errors");

router.get("/", (req, res) => {
    res.render("sign-up");
});

router.post("/", validatePassword, checkValidationErrors, signUp);

module.exports = router;
