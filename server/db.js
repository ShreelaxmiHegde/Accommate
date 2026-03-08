const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const url = process.env.NODE_ENV === "test"
    ? process.env.TESTDB_URL
    : process.env.ATLASDB_URL

async function connectDB() {
    await mongoose.connect(url);
}

connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err);
    });

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, //Don’t create a session until the user actually logs in.
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "lax" : "none"
    }
}

if (process.env.NODE_ENV !== "test") {
    const store = MongoStore.create({
        mongoUrl: url,
        crypto: {
            secret: process.env.SECRET
        }
    });

    store.on("error", (err) => {
        console.log("ERROR - MONGO SESSION STORE", err);
    });

    sessionOptions.store = store;
}

module.exports = { connectDB, sessionOptions };