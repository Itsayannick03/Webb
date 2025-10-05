const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        red: "User",
        required: true
    },
    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Service",
            required: true
        }
    ],
    date: {
        type: Date,
        required: true
    }

});

BookingSchema.path("services").validate(function (value) {
  return value.length >= 1 && value.length <= 3;
}, "A booking must include between 1 and 3 services.");

module.exports = mongoose.model("User", userSchema);