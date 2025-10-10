const express = require("express");
const app = express(); 
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); //for better templating
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js"); //schema validation
const Review = require("./models/reviews.js");

// connect db with backend
const MONGO_URL = "mongodb://127.0.0.1:27017/accommate";
main()
.then((res) => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded( { extended: true })); //parse data
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

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

// <------------------     Routes     ------------------------> //

// home route
app.get("/", (req, res) => {
    res.send("Welcome to Accommate ;)");
});

// Main route -> all listings
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
}));

// new route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

// show route -> specific listing
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews"); //using populate() to get actual doc in review 

    res.render("./listings/show.ejs", { listing });
}));

// create route
app.post("/listings", validateListing, wrapAsync(async (req, res) => {
    const newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
}));

//edit route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
}));

// update route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

// delete route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

// reviews post route
app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

// delete review route 
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async(req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}); //pull operator to remove the reference of review from listing
    await Review.findByIdAndDelete(reviewId); //delete the review from db

    res.redirect(`/listings/${id}`);
}));

// page not found error
app.use((req, res) => {
    res.render("errors/pageNotFound.ejs");
});

// generic error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.render("errors/error.ejs", { err });
});

app.listen(port, () => {
    console.log(`App is listning on port ${port}`);
});     