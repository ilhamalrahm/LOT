import React, { useContext, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useStateDispatch } from '../Context';

const SignInPage=()=>{

    const navigate = useNavigate();
    const dispatch=useStateDispatch();
    var userdetails={
        username:localStorage.getItem("username"),
        name:localStorage.getItem("name"),
        team:localStorage.getItem("team"),
        token:localStorage.getItem("token"),
        
    }

    const HandleSubmit=()=>{
       var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
     

        axios.post("/api/user/signIn",{username,password}).then((res)=>{
            console.log("Signin res " +res)
            dispatch({type:"set",payload:res.data.context})

            navigate("/home");
            
            
        })
    }

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="mainx`" style={{backgroundColor:"#11071F",height:"2000px",overflow:"hidden"}} >
            <section style={{overflow:"hidden",backgroundColor:"#1E0B39",height:"50px",padding:"1%"}}>
                <a href="map.png" style={{paddingLeft:"60%",paddingRight:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>Home</a>
                <a href="map.png" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>About</a>
                <a href="map.png" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>Contact</a>
                <a href="map.png" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>Register</a>

            </section>
            <div classname="sidepage" style={{backgroundColor:"white",width:"50%",height:"2000px"}}>
                <h1 classname="Log in" style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Montserrat', color: "#000000", letterSpacing: '0.02em',textDecoration:"none"}}>Log in</h1>
                <p className="text">Welcome Back! Please enter your details</p>
                <h1 className="username">Email*</h1>
                <input id="username" type="text" placeholder="Enter your email" />
                <h1 className="username">Password*</h1>
                <input id="password" type="text" placeholder="xxxxx" />
                <br></br>
                <input id="auto" type="checkbox" />
                <h1 className="auto">Remember me for 30 days</h1>
                <h1 classname="fp">Forgot Password?</h1>
                <br></br>
                <input id="button" onClick={HandleSubmit} type="button" />
                <h1>Or</h1>
                <h1>Not Registered? Sign Up </h1>
            </div>
        </div>


    );
}

export default SignInPage;
