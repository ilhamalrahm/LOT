import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import bg from './bg.png';
import logo from './logo.png';
import mun from './mun.png';
import date from './date.png';





const Home=()=>{

    const navigate = useNavigate();

    var context=useTheState()
    var dispatch=useStateDispatch()
    console.log("context is  "+context.username)



    // useEffect(()=>{
    //     const checkUser=async()=>{
    //         axios.get("/api/user/home",{token:context.token}).then((res)=>{
    //             console.log(res.data);
    //             console.log("usecheck")

    //         }).catch(err=>{
    //             console.log("error occured " +err);
    //             navigate("/signIn")
    //         });
    //     }
    //     checkUser();
    // },[]);

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style={{backgroundImage:`url(${bg})`,height:"100vh"}}>
            
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-indigo d-flex" style={{backgroundColor:"indigo",height:"50%",padding:"1%"}}>
                <img align="left" src={logo} style={{width:"3%",height:"3%"}}></img>
                <a href="www.google.com" style={{paddingLeft:"60%",paddingRight:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Home</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>About</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Itinerary</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Committees</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Profile</a>
            </nav>
            </div>


            <div>
                <img align="center" src={logo} style={{height:"15%",width:"15%",padding:"2%"}}></img>
            </div>


            <div>
                <img className="date" src={date} style={{padding:"1%"}}></img>
            </div>


            <div>
                <button onClick={"www.google.com"} style={{border:"none",color:"white",backgroundColor:"indigo",fontSize:"150%"}}>Register Now</button>
            </div>


            <div>
                <img className="mun d-flex" src={mun} style={{height:"100%",width:"100%",padding:"3%"}}></img>
            </div>
            
        </div>


    );
}

export default Home;