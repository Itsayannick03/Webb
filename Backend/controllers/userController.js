const bcrypt = require("bcrypt");
const User = require("../models/Users");

async function registerUser(req, res)
{
    console.log("start\n");
    try
        {
            console.log("Entered try block");
            
            //Check If missing fields 
            if(!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.password || !req.body.phoneNumber)
            {
                //If missing fields then return fitting error
                return res.status(409).json({error: "Missing fields"});
            }
    
            //Check if user is already registered
            const user = await User.findOne({ email: req.body.email });
            if(user)
            {
                // If user already in database, return a error messege
                return res.status(409).json({error: "Email already in use"});
            }
    
            //generate salt
            const salt = await bcrypt.genSalt(10); // 10 = cost factor
            
            //hash password
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
            //Save user with hashed password
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: hashedPassword
            });
    
            await newUser.save();
    
            //Get users ID
            const userID = newUser.id.toString();
            
            //Create a secure cookie with userID that lasts for 1h
             res.cookie("user", {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 1000*60*60  
            });

            console.log("newUser.id:", newUser.id);
            console.log("newUser._id:", newUser._id);

           
            return res.status(201).json("Registration successfull");
            console.log('registered User');
    
    
        }
        catch(err)
        {
            // If something else went wrong we catch the error and send it back
            res.status(500).json({error: err.messege});
        }
}

async function loginUser(req, res)
{
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

        //Matching hashed password to hashed given password
        const isMatch = await  bcrypt.compare(req.body.password, user.password);

        if(!isMatch)
        {
            return res.status(401).json({error: "Invalid password"})
        }

        const userID = user.id;

        res.cookie("user", userID.toString(), {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 1000*60*60  
        });

        return res.status(200).json({error: "Login successful"})

    }
    catch(err)
    {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {registerUser, loginUser};