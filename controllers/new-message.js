const Message = require("../models/message");

const newMessage = async (req, res) => {
    try {
        await Message.create(req.body);
        res.redirect("../");
    } catch (err) {
        res.status(400).render("error", { err });
    }
};

module.exports = newMessage;
