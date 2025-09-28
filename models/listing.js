const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listningSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: "https://unsplash.com/illustrations/wooden-bunk-beds-with-pink-bedding-and-ladder-ePMJoTAX9IE", //show if image not added
        set: (v) => v === "" ? 
        "https://unsplash.com/illustrations/wooden-bunk-beds-with-pink-bedding-and-ladder-ePMJoTAX9IE" 
        : v //image link is empty
    },
});

const Listning = mongoose.model("Listing", listningSchema);
module.exports = Listning;