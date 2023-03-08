const Message = require("../models/message");

const deleteMessage = async (req, res) => {
    try {
        await Message.findOneAndDelete({ _id: req.params.id });
        res.redirect("../");
    } catch (err) {
        res.status(400).render("error", { err });
    }
};

module.exports = deleteMessage;
