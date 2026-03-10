const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose"); // adds username and implements salting and hashing values automatically

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

const User = mongoose.model("User", userSchema);
module.exports = User;