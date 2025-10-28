const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    isAdmin: {
    type: Boolean,
    default: false,

    }
});

module.exports = mongoose.model("User", userSchema);