require("dotenv").config();
const connectDB =require("./db");
const express = require("express");
const User = require("./models/Users");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const {registerUser, loginUser} = require("./controllers/userController");

const app = express();
app.use(express.json());
app.use(cookieParser("tempPassword"));

//Connecting to database
connectDB();

//Simple test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

//Register
app.post("/register", registerUser);

//Login
app.post("/login", loginUser);



//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

