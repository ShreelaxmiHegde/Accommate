const Listing = require("./models/listing");
const { listingSchema } = require("./schema.js"); //schema validation
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/reviews.js");
const { reviewSchema } = require("./schema.js"); //schema validation

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

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "Access Denied!");
        return res.redirect(`/listings/${id}`);
    }

    next();
}

// form data validation error handling middleware
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg)); //call next err handler middleware
    } else {
        next();
    }
}

// review validation
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg)); //call next err handler middleware
    } else {
        next();
    }
}

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "Access Denied!");
        return res.redirect(`/listings/${id}`);
    }

    next();
}