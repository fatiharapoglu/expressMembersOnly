const User = require("../models/user");

const signUp = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).render("home");
    } catch (error) {
        res.status(500).render("error", { error });
    }
};

module.exports = signUp;
