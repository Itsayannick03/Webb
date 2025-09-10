require("dotenv").config();
const connectDB =require("./db");
const express = require("express");

const app = express();
app.use(express.json());

//Connecting to database
connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

