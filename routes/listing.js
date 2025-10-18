const express = require("express");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingsController = require("../controllers/listings.js");

// Main route -> all listings
router.get("/", wrapAsync(listingsController.index));

// new route
router.get("/new", isLoggedIn, listingsController.renderNewForm);

// show route -> specific listing
router.get("/:id", wrapAsync(listingsController.showListing));

// create route
router.post(
    "/", 
    isLoggedIn, 
    validateListing, 
    wrapAsync(listingsController.createListing)
);

//edit route
router.get(
    "/:id/edit", 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingsController.renderEditForm)
);

// update route
router.put(
    "/:id", 
    isLoggedIn, 
    isOwner,
    validateListing, 
    wrapAsync(listingsController.updateListing)
);

// delete route
router.delete(
    "/:id", 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingsController.destroyListing)
);

module.exports = router;