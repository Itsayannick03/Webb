require("dotenv").config();
const connectDB =require("./db");
const express = require("express");
const User = require("./models/Users");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cookieParser("tempPassword"));

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

//Check if email already exists
app.get("/check-email/:email", async(req, res) => {
    try
    {
        const email = req.params.email;
        const user = await User.findOne({email});
        res.json({exists: !!user}); //Will send back true if email is found or false if not
    }
    catch
    {
        res.status(500).json({error: "Server error"});
    }
});

app.post("/login", async (req, res) => {
    try
    {
        if(!req.body.email || !req.body.password)
            return res.status(400).json({error: "Missing fields"})

        const user = await User.findOne({
            email: req.body.email
        });


        if(!user) 
        {
            // User does not exist in database
            return res.status(404).json({error: "User not found" });
        }

        if(user.password !== req.body.password)
        {
            return res.status(401).json({error: "Invalid password"})
        }

        const userID = user.id;

        res.cookie("user", userID, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 1000*60*60  
        });

        return res.status(200).json({error: "Login successful"})

    }
    catch(err)
    {
        return res.status(500).json({error: err.messege});
    }
});



app.get("/passwordcheck", async(req, res) => 
{
    try
    {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({
            name: req.body.name,
            password: req.body.password
        });

        res.status(200).json({exists: !!user}); 
    }
    catch(err)
    {
        res.status(500).json(err.messege);
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

