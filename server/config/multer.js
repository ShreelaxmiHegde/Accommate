const multer = require("multer")
const {storage} = require("./cloudinary") 
const ExpressError = require("../utils/ExpressError")

const fileFilter = (req, file, callback) => {
    if(file.mimetype.startsWith("image/")) {
        callback(null, true);
    } else {
        callback(new ExpressError(
            400, 
            "Only image files are allowed!"
        ), false);
    }
}

module.exports.upload = multer({
    storage,
    fileFilter
});