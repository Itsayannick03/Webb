require("dotenv").config();
const connectDB =require("./db");
const express = require("express");
const User = require("./models/Users");

const app = express();
app.use(express.json());

//Connecting to database
connectDB();

//Simple test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

//Create a new user
app.post("/register", async (req, res) =>{
    try
    {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    }
    catch(err)
    {
        res.status(400).json({error: err.messege});
    }
});

// List all users
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
})

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

