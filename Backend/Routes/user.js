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
        email: req.body.email,
        password:req.body.password,
        college:req.body.college,
        committee:"",
        assigned:""
        
   
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
     
        console.log("in signin")
        try {
            const { email, password } = req.body;
            console.log(email)

            // check if user exists in the database
            let user = await User.findOne({ email });
            console.log(user)
            
            if (!user) {
                
                return res.status(400).json({
                    errors: [{ msg: 'Invalid email' }]
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
                  email: user.email
                }
            };
            

            token = user.generateAuthToken(user.email);
            const userdetails={
                
                email:user.email,
                name:user.name,
                token:token,
                college:user.college,
                committee:user.committee,
                assigned:user.assigned


         
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

router.get("/logout",(req,res)=>{
    res.cookie("jwt","loggedout",{

        httpOnly:true,
        secure:true,
        sameSite:"None",
        // domain:"https://verichain.live"
    }).status(200).json({success:true,data:"Logged out!"});

}
);


router.get("/home",authenticate,async (req, res) => {
    // checks for validation result
    console.log("Home is here")
    res.status(200).json({message:"Home successful"});
});



module.exports = router;