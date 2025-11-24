const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    // res.render("./listings/index.ejs", { allListings });
    res.json(allListings);
};

module.exports.renderNewForm = (req, res) => {
    // res.render("./listings/new.ejs");
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
        // res.render("./listings/show.ejs", { listing });
        res.json(listing);
    }
};

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id; // assign logged in user as owner of listing
    newlisting.image = { url, filename }; // assign image data to listing
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
    } 

    let originalImgUrl = listing.image.url;
    originalImgUrl = originalImgUrl.replace("/upload", "/upload/w_250");
    // res.render("./listings/edit.ejs", { listing, originalImgUrl });
    res.json({listing, originalImgUrl});
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if(typeof req.file !== "undefined") { //update image only if new image added
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing updated.");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("error", "Listing deleted!");
    res.redirect("/listings");
};