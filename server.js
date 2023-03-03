const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const favicon = require("serve-favicon");
require("ejs");
require("dotenv").config();

const indexRouter = require("./routes/index");
const notFound = require("./middleware/404");

mongoose.set("strictQuery", false);
const app = express();
const port = process.env.PORT || 3030;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use(notFound);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database.");
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
