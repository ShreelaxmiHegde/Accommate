const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async(req, res) => {
    try {
        let { username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        
        // automatic login after signup
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }

            req.flash("success", "Welcome to Accommate!");
            res.redirect("/listings");
        });
    } catch(err) { // username entered is existing username
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs")
});

router.post("/login", 
    saveRedirectUrl,
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true 
    }), 
    async(req, res) => {
        req.flash("success" ,"Welcome back to Accommate");

        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    }
);

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err)  { // to catch issues from passport.js if any occured.
            return next();
        }
        req.flash("error", "You are logged out!");
        res.redirect("/listings");
    });
});

module.exports = router;