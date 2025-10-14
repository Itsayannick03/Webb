const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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



module.exports = mongoose.model("Booking", bookingSchema);