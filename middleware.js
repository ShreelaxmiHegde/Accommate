module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        // redirect url after login
        req.session.redirectUrl = req.originalUrl;

        req.flash("error", "You must be logged in to add your housings");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}