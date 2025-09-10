const mongoose = require("mongoose");

async function connectDB()
{
    try
    {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("%cMongoDB connected", "color: green");

    }
    catch(err)
    {
        console.error("%cDatabase connection failed:", "color: red", err.messege);
        process.exit(1);
    }
}

module.exports = connectDB;