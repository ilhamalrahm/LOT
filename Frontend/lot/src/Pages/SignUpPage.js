import React, { useContext, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const SignUpPage=()=>{

    const HandleSubmit=()=>{
       var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
       var name=document.getElementById('name').value;

        axios.post("/api/user/signUp",{username,password,name}).then(res=>{
            console.log(res.data);
        })
    }

    return(
        <div className="main" style={{height:"2000px",overflow:"hidden"}}>
            <section style={{overflow:"hidden",backgroundColor:"#1E0B39",height:"50px",padding:"1%"}}>
                <a href="/home" style={{paddingLeft:"60%",paddingRight:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>Home</a>
                <a href="/about" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>About</a>
                <a href="/contact" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>Contact</a>
                <a href="/signup" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"0px",textDecorationColor:"indigo",color:"white"}}>Register</a>
            </section>
            <div classname="sidepage" style={{backgroundColor:"black",width:"50%",height:"2000px"}}>

            </div>
            <div classname="sidepage" style={{backgroundColor:"white",width:"50%",height:"2000px"}}>
                <h1 style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Montserrat', color: "#000000", letterSpacing: '0.02em',textDecoration:"none"}}>Register</h1>
                <p>Welcome! Please Enter your details</p>
                <h1 className="username">Name*</h1>
                <input id="name" type="text" />
                <input id="name" type="text" />
                <h1 className="username">Email*</h1>
                <input id="username" type="text" />
                <h1 className="username">Password*</h1>
                <input id="password" type="text" />
                <h1 className="username">Confirm Password*</h1>
                <input id="password" type="text" />
                <input id="button" onClick={HandleSubmit} type="button" />
                <h1>Or</h1>
            </div>
        </div>


    );
}

export default SignUpPage;
