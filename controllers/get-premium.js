const User = require("../models/user");

const getPremiumController = async (req, res) => {
    if (req.body.hidden !== process.env.HIDDEN_PASSWORD) {
        return res.status(401).render("error", {
            err: "Wrong hidden password. Please get code from github repo's readme file...",
        });
    }
    const upgradingEmail = res.locals.currentUser.email;
    await User.findOneAndUpdate({ email: upgradingEmail }, { isPremium: true }, { new: true });
    res.redirect("/get-premium");
};

module.exports = getPremiumController;
