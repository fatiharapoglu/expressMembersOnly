const User = require("../models/user");

const getPremiumController = async (req, res) => {
    if (req.body.hidden === process.env.HIDDEN_PASSWORD) {
        return res.send("Correct");
    }
    res.send("nope");
};

module.exports = getPremiumController;
