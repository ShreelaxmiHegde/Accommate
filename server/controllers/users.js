const User = require("../models/user.js");

module.exports.renderSignupFrom = (req, res) => {
    // res.render("users/signup.ejs");
};

module.exports.signup = async(req, res) => {
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
};

module.exports.renderLoginFrom = (req, res) => {
    // res.render("users/login.ejs")
};

module.exports.login = async(req, res) => {
    req.flash("success" ,"Welcome back to Accommate");

    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err)  { // to catch issues from passport.js if any occured.
            return next();
        }
        req.flash("error", "You are logged out!");
        res.redirect("/listings");
    });
};