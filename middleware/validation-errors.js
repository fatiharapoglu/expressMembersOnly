const { validationResult } = require("express-validator");

const checkValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(409).render("error", { error: errors.array()[0].msg });
    }
    next();
};

module.exports = checkValidationErrors;
