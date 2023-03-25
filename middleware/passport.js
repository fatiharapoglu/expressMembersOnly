const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

const customFields = {
    usernameField: "email",
    passwordField: "password",
};

const verifyCallback = async (username, password, done) => {
    const user = await User.findOne({ email: username });
    if (!user) {
        return done(null, false);
    }
    const isValid = await user.comparePassword(password);
    if (isValid) {
        return done(null, user);
    }
    return done(null, false);
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
