const express = require("express");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const { listingSchema } = require("../schema.js"); //schema validation
const ExpressError = require("../utils/ExpressError.js");
const router = express.Router();
const { isLoggedIn } = require("../middleware.js");

// form data validation error handling middleware
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg)); //call next err handler middleware
    } else {
        next();
    }
}

// Main route -> all listings
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
}));

// new route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("./listings/new.ejs");
});

// show route -> specific listing
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner"); //using populate() to get actual doc in review 

    //show flash if listing doesnt exist
    if(!listing) {
        req.flash("error", "The listing you are searching for - doesn't exist!");
        res.redirect("/listings");
    } else {
        res.render("./listings/show.ejs", { listing });
    }
}));

// create route
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id; // assign logged in user as owner of listing
    await newlisting.save();
    
    req.flash("success", "New Listing created.");
    res.redirect("/listings");
}));

//edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if(!listing) {
        req.flash("error", "The listing you are searching for - doesn't exist!");
        res.redirect("/listings");
    } else {
        res.render("./listings/edit.ejs", { listing });
    }
}));

// update route
router.put("/:id", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    req.flash("success", "Listing updated.");
    res.redirect(`/listings/${id}`);
}));

// delete route
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("error", "Listing deleted!");
    res.redirect("/listings");
}));

module.exports = router;