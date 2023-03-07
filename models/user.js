const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: [20, "Name should be lower than 20 characters"],
    },
    surname: {
        type: String,
        required: true,
        maxLength: [20, "Last name should be lower than 20 characters"],
    },
    email: {
        type: String,
        required: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Email is not valid",
        ],
        unique: [true, "This e-mail is already in use"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password should be at least 6 characters"],
    },
    isPremium: {
        type: Boolean,
        default: false,
    },
});

UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (comparedOne) {
    const isMatch = await bcrypt.compare(comparedOne, this.password);
    return isMatch;
};

UserSchema.virtual("fullname").get(function () {
    return `${this.name} ${this.surname}`;
});

module.exports = mongoose.model("User", UserSchema);
