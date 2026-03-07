if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const cors = require("cors");
const {sessionOptions} = require('./db.js')

app.use(cors({
    origin: "https://accommate.vercel.app",
    credentials: true
}));

//cookies marked secure to be trusted on Render
app.set("trust proxy", 1);

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

module.exports = app;    