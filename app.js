const express = require("express");
const app = express(); 
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

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

// all listings
app.get("/listings", async (req, res) => {
    await Listing.find({}).then((res) => {
        console.log(res);
    });
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "teen accommodations",
//         desc: "For teens in universities",
//         location: "Banglore",
//         state: "Karnataka",
//         price: 8000,
//         capacity: 4
//     });

//     await sampleListing.save();
//     console.log("sample saved");
//     res.send("succussefull test");
// });


app.listen(port, () => {
    console.log(`App is listning on port ${port}`);
});