const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose"); // adds username and implements salting and hashing values automatically

const userSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);