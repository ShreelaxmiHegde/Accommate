const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    nearestCampus: {
        type: String,
        required: true
    },
    stateCity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    facilities: {
        type: [String],
        required: true
    },
    image: {
        url: String,
        filename: String
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: Number
    }
});

// middleware for deleting all the reviews a listing had after the listing is deleted
listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;