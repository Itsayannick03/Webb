const rateLimit = require("express-rate-limit");

require("dotenv").config();
const connectDB = require("./db");
const express = require("express");

const cookieParser = require("cookie-parser");
const {
  registerUser,
  loginUser,
  getUser,
  logout,
  updateUser,
} = require("./controllers/userController");
const {
  selectService,
  createBooking,
  getBookings,
  selectDate,
} = require("./controllers/bookingControllers.js");
const {
  createService,
  getServices,
  getServiceByName,
  deleteService,
} = require("./controllers/serviceController.js");
const cors = require("cors");

const loginLimit = rateLimit({
  windowMs: 10000,
  max: 5,
  message: {
    error:
      "Whoa there, speedster! Give it a moment, when the bar’s gone, you can try again.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();
app.use(express.json());
app.use(cookieParser("tempPassword"));
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true, // allow cookies
  })
);

//Connecting to database
connectDB();

//Simple test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

//Register
app.post("/users/register", registerUser);

//Login
app.post("/users/login", loginLimit, loginUser);

//Logout
app.post("/users/logout", logout);

//Get user names from Cookie
app.get("/users", getUser);

app.put("/users", updateUser);

app.post("/bookings/select-services", selectService);
app.post("/bookings/select-date", selectDate);
app.post("/bookings", createBooking);
app.get("/bookings", getBookings);

app.post("/services", createService);

app.get("/services", getServices);

app.get("/services/:name", getServiceByName);

app.delete("/services/:id", deleteService);

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
