const User = require("../models/user.js");

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

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) { // to catch issues from passport.js if any occured.
            return next();
        }

        //prevent undefined user after logout
        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            return res.json({ success: true, message: "logout was successful" })
        });
    });
};