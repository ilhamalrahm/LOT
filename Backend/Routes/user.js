const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../Models/User');
const authenticate=require('../Middleware/Authenticate')


// To Sign Up
router.post("/signUp",async (req, res) => {

    console.log("here")


    var userObj = {
        name: req.body.name,
        username: req.body.username,
        password:req.body.password,
        team:"Random"
   
    }


    try {
        const user = new User(userObj);
        user.save().then(() => {
            const payload = {
                user: {
                  userId: user._id,
                  username: user.username
                }
            };
            token = user.generateAuthToken(payload);
            console.log(token);
            res.setHeader('x-auth-token', token);
            res.status(200).send({ message: "Sign up successful" });
        }).catch((err) => {
            res.status(403).json({ errors: [err] });
            console.log(err)
        })    
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});


//To Sign in 

router.post("/signIn",async (req, res) => {
        // checks for validation result
     

        try {
            const { username, password } = req.body;

            // check if user exists in the database
            let user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid username' }]
                });
            }

            // check if the password matches
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                   errors: [{ msg: 'Invalid Password' }]
                });
            }

            const payload = {
                user: {
                  userId: user._id,
                  username: user.username
                }
            };
            

            token = user.generateAuthToken(user.username);
            const userdetails={
                
                username:user.username,
                team:user.team,
                name:user.name,
                token:token

         
        }
            res.setHeader('token', token);
            res.cookie("jwt",token,{
                httpOnly:true,
                secure:true,
                sameSite:"None",
                // domain:"https://verichain.live"
            }).status(200).json({success:true,data:"Login successful!",context:userdetails});
            // res.status(200).send({ success: true, message: "Login successful",userdetails:userdetails});
        } catch (error) {
            console.log(error)
            res.status(500).send({ success: false, message: 'Oops, server error' });
        }
});


router.get("/home",authenticate,async (req, res) => {
    // checks for validation result
    console.log("Home is here")
    res.status(200).json({message:"Home successful"});
});



module.exports = router;