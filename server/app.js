if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

console.log("ENV:", process.env.NODE_ENV)

const express = require("express");
const app = express(); 
const port = 8080;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const cors = require("cors");

app.use(cors({
    origin: "https://accommate.vercel.app",
    credentials: true
}));

// connect db with backend
const dbUrl = process.env.ATLASDB_URL;
main()
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET
    }
});

store.on("error", (err) => {
    console.log("ERROR - MONOGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, //Don’t create a session until the user actually logs in.
    cookie: {
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        // secure: false,
        // sameSite: "lax"
        secure: true,
        sameSite: "none"
    }
}

app.use(express.json()); //parse axios req json data from the frontend
app.use(express.urlencoded( { extended: true })); //parse data
app.use(methodOverride("_method"));

app.use(session(sessionOptions)); //setup express-session middleware

app.use(passport.initialize()); //setup Passport
app.use(passport.session()); //connect to session
passport.use(new LocalStrategy(
    { usernameField: "email" },
    User.authenticate())
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.use((req, res, next) => {
    res.locals.currUser = req.user;
    next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


// generic error handler
app.use((err, req, res, next) => {
    let { statusCode=500, error, message="Something went wrong!", details } = err;
    console.log(err)

    if(err.name === "CastError") {
        return res.status(statusCode).json({
            success: false,
            message: "Invalid listing ID"
        })
    }

    if(err.name === "ValidationError") {
        return res.status(statusCode).json({
            success: false,
            message: "Invalid input. Please check your data."
        })
    }

    return res.status(statusCode).json({
        error: error,
        message: message,
        details: details
    });
});

app.listen(port, () => {
    console.log(`App is listning on port ${port}`);
});     