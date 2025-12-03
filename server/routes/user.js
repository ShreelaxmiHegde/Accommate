const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const { saveRedirectUrl, authenticate } = require("../middleware.js");
const listingsController = require("../controllers/users.js");

router.route("/signup")
.post(wrapAsync(listingsController.signup));

router.route("/login")
.post( 
    saveRedirectUrl,
    authenticate
);

router.get("/logout", listingsController.logout);

module.exports = router;