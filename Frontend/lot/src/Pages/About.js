import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";

const About=()=>{

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style={{backgroundColor:"black",height:"150%",overflow:"hidden"}}>
            <section style={{backgroundColor:"indigo",height:"50%",padding:"1%"}}>
                <a href="map.png" style={{paddingLeft:"60%",paddingRight:"1%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Home</a>
                <a href="map.png" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>About</a>
                <a href="map.png" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Itinerary</a>
                <a href="map.png" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Committees</a>
                <a href="map.png" style={{padding:"2%",outline:"none",border:"none",fontWeight:"bold",cursor:"pointer",textDecorationThickness:"30%",textDecorationColor:"orange",color:"white"}}>Profile</a>
            </section>
        <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"center",paddingTop:"5%",fontSize:"150%",fontWeight:"bold"}}>ABOUT</p>
        <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"5%",fontWeight:"bold",fontSize:"100%"}}>About us</p>
        <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"5%",fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt<br/> voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
        <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"5%",fontWeight:"bold",fontSize:"100%"}}>Venue</p>
        <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"5%",fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt<br/> voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
        <img src="map.png" align="right" height="200px" width="75%"></img>
        </div>
        
    );
}

export default About;