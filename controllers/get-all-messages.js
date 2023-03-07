const Message = require("../models/message");

const getAllMessages = async (req, res) => {
    const messages = await Message.find().populate("createdBy");
    res.status(200).render("index", { messages });
};

module.exports = getAllMessages;
