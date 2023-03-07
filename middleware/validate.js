const { check } = require("express-validator");

const validatePassword = check("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password");
    }
    return true;
});

module.exports = validatePassword;
