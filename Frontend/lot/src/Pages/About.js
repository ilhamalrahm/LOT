import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from './map.png';
import logo from './logo.png'

const About=()=>{

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style={{backgroundColor:"black",height:"100vh",overflow:"hidden",position:"relative"}}>
            <div>
            <section style={{backgroundColor:"indigo",height:"50%",padding:"1%"}}>
                <img align="left" src={logo} style={{width:"3%",height:"3%"}}></img>
                <a href="www.google.com" style={{paddingLeft:"60%",paddingRight:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Home</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>About</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Itinerary</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Committees</a>
                <a href="www.google.com" style={{padding:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Profile</a>
            </section>
            </div>

        <div>
        <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"center",paddingTop:"5%",fontSize:"150%",fontWeight:"bold"}}>ABOUT</p>
        <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"5%",fontWeight:"bold",fontSize:"100%"}}>About us</p>
        <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"5%",fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt<br/> voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
        <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"5%",fontWeight:"bold",fontSize:"100%"}}>Venue</p>
        <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"5%",fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt<br/> voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
        </div>
        <div>
        <img src={map} align="right" height="50%" width="60%" style={{paddingRight:"5%"}}></img>
        </div>
        </div>
        
    );
}

export default About;