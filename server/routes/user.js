const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../../middleware.js");
const listingsController = require("../controllers/users.js");

router.route("/signup")
.get(listingsController.renderSignupFrom)
.post(wrapAsync(listingsController.signup));

router.route("/login")
.get(listingsController.renderLoginFrom)
.post( 
    saveRedirectUrl,
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true 
    }), 
    listingsController.login
);

router.get("/logout", listingsController.logout);

module.exports = router;