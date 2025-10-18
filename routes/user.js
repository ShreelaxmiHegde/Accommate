const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const listingsController = require("../controllers/users.js");

router.get("/signup", listingsController.renderSignupFrom);

router.post("/signup", wrapAsync(listingsController.signup));

router.get("/login", listingsController.renderLoginFrom);

router.post(
    "/login", 
    saveRedirectUrl,
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true 
    }), 
    listingsController.login
);

router.get("/logout", listingsController.logout);

module.exports = router;