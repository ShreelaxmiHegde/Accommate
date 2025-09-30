const express = require("express");
const app = express(); 
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); //for better templating

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

// <------------------     Routes     ------------------------> //

// home route
app.get("/", (req, res) => {
    res.send("Welcome to Accommate ;)");
});

// Main route -> all listings
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
});

// new route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

// show route -> specific listing
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id); //find listing with the id in db

    res.render("./listings/show.ejs", { listing });
});

// create route
app.post("/listings", async (req, res) => {
    // let listing = req.body.listing; // accessing user input value in form (returns js obj)
    const newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
});

//edit route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
});

// update route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
});

// delete route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
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