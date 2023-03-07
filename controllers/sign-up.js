const User = require("../models/user");

const signUp = async (req, res) => {
    try {
        await User.create(req.body);
        res.redirect("../");
    } catch (err) {
        res.status(400).render("error", { err });
    }
};

module.exports = signUp;
