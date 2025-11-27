if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express(); 
const port = 8080;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const cors = require("cors");
// import cors from "cors";
// const path = require("path");
// const ejsMate = require("ejs-mate"); //for better templating

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// connect db with backend
const dbUrl = process.env.ATLASDB_URL;
main()
.then((res) => {
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
    },
    touchAfter: 24 * 3600
});

store.on("error", () => {
    console.log("ERROR - MONOGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, //Don’t create a session until the user actually logs in.
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    }
}

// app.set("view engine", "ejs");
// app.engine("ejs", ejsMate);
app.use(express.json()); //parse axios req json data from the frontend
app.use(express.urlencoded( { extended: true })); //parse data
app.use(methodOverride("_method"));
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "/public")));

app.use(session(sessionOptions)); //setup express-session middleware
app.use(flash());

app.use(passport.initialize()); //setup Passport
app.use(passport.session()); //connect to session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/Accommate", (req, res) => {
//     res.render("home.ejs");
// });

// app.get("/support", (req, res) => {
//   res.render("support.ejs");
// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


// page not found error
// app.use((req, res) => {
//     res.render("errors/pageNotFound.ejs");
// });

// generic error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    // res.render("errors/error.ejs", { err });
});

app.listen(port, () => {
    console.log(`App is listning on port ${port}`);
});     