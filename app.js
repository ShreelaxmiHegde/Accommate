const express = require("express");
const app = express(); 
const port = 8080;
const mongoose = require("mongoose");
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

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

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