const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    return res.json({
        success: true,
        message: "Review created successfully",
    });
}

module.exports.destroyReview = async (req, res) => {
    console.log("@delete review");
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); //pull operator to remove the reference of review from listing
    await Review.findByIdAndDelete(reviewId); //delete the review from db

    return res.json({
        success: true,
        message: "Review deleted successfully"
    })
};