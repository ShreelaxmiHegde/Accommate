const mongoose = require("mongoose");
const { Review } = require("./reviews");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
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
        default: "https://images.unsplash.com/vector-1756301725630-0dba7e612f04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", //show if image not added
        set: (v) => v === "" ? 
         "https://images.unsplash.com/vector-1756301725630-0dba7e612f04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D"
        : v //image link is empty
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;