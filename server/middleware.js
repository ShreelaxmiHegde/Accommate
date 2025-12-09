const Listing = require("./models/listing");
const { listingSchema } = require("./schema.js"); //schema validation
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/reviews.js");
const { reviewSchema } = require("./schema.js"); //schema validation
const passport = require("passport");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // redirect url after login
        req.session.redirectUrl = req.originalUrl;
        next(new ExpressError(
            401, 
            "Unauthorized", 
            "Authentication needed!",
        ));
        return res.json({success: false, message:"Login Authentication Required!"})
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    
    if (!listing.owner.equals(res.locals.currUser._id)) {
        console.log("owner mismatch...");
        next(new ExpressError(
            401, 
            "Unauthorized", 
            "Unauthorized access!",
        ));
    }

    next();
}

// form data validation error handling middleware
module.exports.validateListing = (req, res, next) => {
    //if no new image uploaded, delete image field to avoid validation error
    if(!req.file) delete req.body.listing.image;

    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log("listing validation error:", errMsg);
        next(new ExpressError(
            400, 
            "Bad Request", 
            "Listing validation failed. Please check if any fields are missing or contain invalid values.",
            errMsg
        )); //call next err handler middleware
    } else {
        next();
    }
}

// review validation
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log("review validation error:", errMsg);
        next(new ExpressError(
            400, 
            "Bad Request", 
            "Review validation failed!",
            errMsg
        )); //call next err handler middleware
    } else {
        next();
    }
}

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "Access Denied!");
        return res.redirect(`/listings/${id}`);
    }

    next();
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);

        if (!user) {
            return res.json({
                success: false,
                message: info?.message || "Invalid email or password!"
            });
        }

        req.logIn(user, (err) => {
            if (err) return next(err);
            res.json({ success: true, user: user })
        })
    })(req, res, next);
}