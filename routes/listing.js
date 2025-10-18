const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingsController = require("../controllers/listings.js");

router.route("/")
.get(wrapAsync(listingsController.index))
.post( 
    isLoggedIn, 
    validateListing, 
    wrapAsync(listingsController.createListing)
);

router.get("/new", isLoggedIn, listingsController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingsController.showListing))
.put( 
    isLoggedIn, 
    isOwner,
    validateListing, 
    wrapAsync(listingsController.updateListing)
)
.delete( 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingsController.destroyListing)
);

router.get(
    "/:id/edit", 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingsController.renderEditForm)
);

module.exports = router;