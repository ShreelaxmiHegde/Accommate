const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user.js");
const Review = require("../models/reviews.js")
const sampleListings = require("./listingData.js");
const sampleReviews = require("./reviewData.js")
require("dotenv").config();

main()
    .then((res) => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Review.deleteMany({});
    
    //fetch user data
    const users = await User.find({});
    
    // create username → id map
    const userMap = {};
    users.forEach(user => {
        userMap[user.username] = user._id;
    });

    sampleReviews.forEach(review => {
        review.author = userMap[review.author]
    });

    const reviews = await Review.insertMany(sampleReviews);

    // replace owner names with user IDs
    const listings = sampleListings.map((listing, idx=0) => ({
        ...listing,
        owner: userMap[listing.owner],
        reviews: [reviews[idx]._id]
    }));

    // insert listings
    await Listing.insertMany(listings);
    
    console.log("Data Seeded successfully");
}

initDB();