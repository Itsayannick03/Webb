const bcrypt = require("bcrypt");
const User = require("../models/Users");

async function registerUser(req, res)
{
    try
        {
            
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
            res.cookie("user", userID.toString(), {
            httpOnly: true,
            secure: false,        // must be false on localhost
            sameSite: "lax",      // "strict" can block cross-origin requests
            maxAge: 1000 * 60 * 60
        });

           
            return res.status(201).json({error: "Registration Sucessfull"});
    
    
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

        const userID = user.id.toString();

        res.cookie("user", userID.toString(), {
            httpOnly: true,
            secure: false,        // must be false on localhost
            sameSite: "lax",      // "strict" can block cross-origin requests
            maxAge: 1000 * 60 * 60
        });

        return res.status(200).json({error: "Login successful"})

    }
    catch(err)
    {
        return res.status(500).json({error: err.message});
    }
}

async function getUser(req, res)
{
    try
    {
        const userID = req.cookies.user;

        if(!userID)
            return res.status(401).json({message: "Not logged in"});

        const user = await User.findById(userID);

        if(!user)
            return res.status(404).json({message: "User not found"});

        return res.status(200).json({firstName: user.firstName, lastName: user.lastName, email: user.email, phoneNumber: user.phoneNumber , password: user.password});
    }
    catch(err)
    {
        res.status(500).json({error: err.message});
    }
}

async function updateUser(req, res)
{
    try
    {
        const userID = req.cookies.user;

        if(!userID)
            return res.status(404).json({error: "User not found"});

        const {firstName, lastName, email, phoneNumber, currentPassword, newPassword} = req.body;

        const user = await User.findById(userID);

        if(email != user.email)
        {
            const emailInUse = User.findOne(email);

            if(emailInUse)
                return res.status(409).json({error: "Email already in use"});
        }

        if(newPassword == "")
        {
            const updatedUser = await User.findByIdAndUpdate(
            userID,
            {firstName, lastName, email, phoneNumber},
            {new: true});

            return res.status(200).json(updatedUser);
        }
        else
        {
            const isMatch = await  bcrypt.compare(currentPassword, user.password);

            if(!isMatch)
                return res.status(401).json({error: "Invalid password"});

            //generate salt
            const salt = await bcrypt.genSalt(10); // 10 = cost factor
                
            //hash password
            const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

            const updatedUser = await User.findByIdAndUpdate(
                userID,
                {firstName, lastName, email, phoneNumber, password: hashedPassword},
                {new: true}
            );
            return res.status(200).json(updatedUser);
        }
        

        
    }
    catch(err)
    {
        res.status(500).json({error: err.message});
    }
}

async function logout(req, res) {
    try 
    {
        const user = req.cookies.user;

        if(!user)
            return res.status(402).json({error: "cookie not found"});

        res.clearCookie("user");
        res.status(200).json({message: "Succesfull Logut"});
        console.log("user deleted")
    } catch (err) 
    {
        res.status(500);
        res.json({error: "Error:" + err});
    }
}



<<<<<<< HEAD
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





module.exports = {registerUser, loginUser, getUser, logout, updateUser, createServiceRequest, createBooking};


=======
module.exports = {registerUser, loginUser, getUser, logout, updateUser};
>>>>>>> be7cc64fd107fb9587a1a473d80149684b417afc
