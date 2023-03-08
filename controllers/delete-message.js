const Message = require("../models/message");

const deleteMessage = async (req, res) => {
    if (!res.locals.currentUser.isAdmin) {
        return res.status(401).render("error", { err: "You're not an admin, please stop it." });
    }
    try {
        await Message.findOneAndDelete({ _id: req.params.id });
        res.redirect("../");
    } catch (err) {
        res.status(400).render("error", { err });
    }
};

module.exports = deleteMessage;
