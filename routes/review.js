const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { reviewSchema } = require("../schema.js"); //schema validation
const Review = require("../models/reviews.js");

// review validation
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg)); //call next err handler middleware
    } else {
        next();
    }
}

// reviews post route
router.post("/", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "Review created.");

    res.redirect(`/listings/${listing._id}`);
}));

// delete review route 
router.delete("/:reviewId", wrapAsync(async(req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}); //pull operator to remove the reference of review from listing
    await Review.findByIdAndDelete(reviewId); //delete the review from db

    req.flash("error", "Review deleted.");

    res.redirect(`/listings/${id}`);
}));

module.exports = router;