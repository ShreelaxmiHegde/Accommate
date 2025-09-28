const mongoose = require("mongoose");
const initData = require("./data.js");
const Listning = require("../models/listing");

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
    await Listning.insertMany(initData.data);
    console.log("Data initialized");
}

initDB();