const bcrypt = require("bcrypt");
const Booking = require("../models/Booking.js");
const { findById } = require("../models/Users.js");

async function createServiceRequest(req, res) {
    try 
    {
        const services = await req.body.services;

        if(!Array.isArray(services) || services.length == 0)
            return res.status(400).json({error: "Services must be a non empty array"});
        for(i = 0; i < services.length; i++) {
            const exists = Service.findById(services[i])
            if(!exists) {
                return exists.status(401).json({error: "Service not found"});
            }   
        }

        res.cookie("services", JSON.stringify(services), {
            httpOnly: true,
            secure: false,        // must be false on localhost
            sameSite: "lax",      // "strict" can block cross-origin requests
            maxAge: 1000 * 60 * 60
        });

        res.status(201).json({error: "Created new service"});

    } 
    catch (err) 
    {
        res.status(500).json({error: "Internal server error"});
    }
}

async function createBooking(req, res)
{
    try 
    {
        const services = req.cookies.services ? JSON.parse(req.cookies.services) : [];
        if(!Array.isArray(services) || services.length == 0)
            return res.status(400).json({error: "Services must be a non empty array"});


        const UserID = req.cookies.user;
        if(!UserID)
            return res.status(404).json({error: "User not found"});
        
        const {date} = req.body;
        if(!date)
            return res.status(400).json({error: "Missing data"});

        const newBooking = new Booking({
            userID: UserID,
            services: services,
            date: date
        });
        
        await newBooking.save();

        return res.status(201).json({message: "Booking created"});

    } 
    catch (err) 
    {
        res.status(500).json({error: err.message})
    }
}

module.exports = {createServiceRequest, createBooking};