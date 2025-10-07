require("dotenv").config();
const connectDB =require("./db");
const express = require("express");
const User = require("./models/Users");
const Booking = require("./models/Booking");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const {registerUser, loginUser, getUser, logout, updateUser} = require("./controllers/userController");
const {createServiceRequest, createBooking} = require("./controllers/bookingControllers.js");
const {createService,getServices,getServiceByName, deleteService} = require("./controllers/serviceController.js")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser("tempPassword"));
app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  credentials: true                // allow cookies
}));


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

//Logout
app.post("/logout", logout);

//Get user names from Cookie
app.get("/name", getUser)

app.put("/user", updateUser)



app.post("/booking", createBooking)


app.post("/services", createService)

app.get("/services", getServices)

app.get("/services/:name", getServiceByName)

app.delete("/services/:id", deleteService)


app.post("/services", createServiceRequest)


//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

