const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ 
            path: "reviews", 
            populate: { 
                path: "author"
            } 
        }).populate("owner"); //using populate() to get actual doc in review 

    //show flash if listing doesnt exist
    if(!listing) {
        req.flash("error", "The listing you are searching for - doesn't exist!");
        res.redirect("/listings");
    } else {
        res.render("./listings/show.ejs", { listing });
    }
};

module.exports.createListing = async (req, res) => {
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id; // assign logged in user as owner of listing
    await newlisting.save();
    
    req.flash("success", "New Listing created.");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if(!listing) {
        req.flash("error", "The listing you are searching for - doesn't exist!");
        res.redirect("/listings");
    } else {
        res.render("./listings/edit.ejs", { listing });
    }
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    req.flash("success", "Listing updated.");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("error", "Listing deleted!");
    res.redirect("/listings");
};