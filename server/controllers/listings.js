const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
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
        return res.json({
            success: false,
            message: "Listing not Found"
        });
    }

    return res.json({
        success: true, 
        message: "Listing found", 
        listing: listing
    });
};

module.exports.createListing = async (req, res) => {
    //url, filename from multer file upload
    let url = req.file.path;
    let filename = req.file.filename;

    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id; // assign logged in user as owner of listing
    newlisting.image = { url, filename }; // assign image data to listing
    await newlisting.save();
    
    let redirectUrl = `/listings/${newlisting._id}`;
    return res.json({ 
        success: true, 
        message: "Listing created successfully!", 
        listing: newlisting,
        url: redirectUrl
    });
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

    //update image only if new image added
    if(typeof req.file !== "undefined") { 
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    return res.json({
        success: true,
        message: "Listing updated successfully!"
    })
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);

    return res.json({
        success: true,
        message: "Listing deleted successfully!"
    })
};