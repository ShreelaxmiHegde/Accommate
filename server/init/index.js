const mongoose = require("mongoose");
const initData = require("./data.js");
const Listning = require("../models/listing");
const Listing = require("../models/listing");

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

const initDB = async () => {
    await Listing.deleteMany({}); // (temp)

    initData.data = initData.data.map((obj) => ({ ...obj, owner: "68ededcb2fbb8fd49d7f5196" })); //add owner (temp)

    await Listning.insertMany(initData.data);
    console.log("Data initialized");
}

initDB();