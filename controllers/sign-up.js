const User = require("../models/user");

const signUp = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).render("index", { user: req.user });
    } catch (err) {
        res.status(400).render("error", { err });
    }
};

module.exports = signUp;
