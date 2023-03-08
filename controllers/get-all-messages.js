const Message = require("../models/message");

const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate("createdBy").sort({ timestamp: -1 });
        res.status(200).render("index", { messages });
    } catch (err) {
        res.status(400).render("error", { err });
    }
};

module.exports = getAllMessages;
