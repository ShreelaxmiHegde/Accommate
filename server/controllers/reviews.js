const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    return res.json({
        success: true,
        message: "Review created successfully",
        review: newReview
    });
}

module.exports.updateReview = async(req, res) => {
    let { reviewId } = req.params;
    let review = await Review.findByIdAndUpdate(
        reviewId, 
        {comment:req.body.comment}, 
        {new: true, runValidators: true}
    ).populate("author", "username");

    return res.json({
        success: true,
        message: "Review updated successfully",
        review: review
    })
}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); //pull operator to remove the reference of review from listing
    await Review.findByIdAndDelete(reviewId);

    return res.json({
        success: true,
        message: "Review deleted successfully"
    })
};