const User = require("../models/user.js");

module.exports.renderSignupFrom = (req, res) => {
    // res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        // automatic login after signup
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
        });
 
        return res.status(200).json(
            {
                success: true,
                user: registeredUser
            })

    } catch (err) { // username entered is existing username
        return res.status(400).json(
            {
                success: false,
                message: "Please recheck the credentials. You have submitted already existing ones!"
            })
    }
};

module.exports.renderLoginFrom = (req, res) => {
    // res.render("users/login.ejs")
};

module.exports.login = async (req, res) => {
    console.log("@login controller")
    //flash
    let redirectUrl = res.locals.redirectUrl || "/";
    return res.json({ success: true, url: redirectUrl });
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) { // to catch issues from passport.js if any occured.
            return next();
        }

        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            return res.json({ success: true, message: "logout was successful" })
        });
    });
};