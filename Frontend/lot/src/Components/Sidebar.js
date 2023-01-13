import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../images/map.png';
import logo from '../images/logo.png'


const SideBar=()=>{
    const Close=()=>{
        document.getElementById("sidebar").style.visibility="hidden";
    }
    return(

        <div className="sidebar position-absolute" id="sidebar" style={{backgroundColor:"#181818",borderRadius:"5px",zIndex:"100", visibility:"hidden",right:"0%",height:"100vh",width:"40vw",boxShadow:"-4px 3px 4px"}}>
            <div className="btn btn-close position-absolute text-white"  onClick={Close} style={{left:"3%",top:"1%", backgroundColor:"white"}}></div>
            <div className="links pt-4">
                <a className='p-1' id="home" href="/landing" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Home</a>
            </div>

            <div className="links pt-2">
                <a className='p-1' id="about" href="/about" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>About</a>
            </div>

            <div className="links pt-2">
                <a className='p-1' id="itinerary" href="/itinerary" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Itinerary</a>
            </div>

            <div className="links pt-2">
                <a className='p-1' id="committees" href="/committees" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Committees</a>
            </div>

            <div className="links p-2">
                <a className='p-1' id="profile" href="/profile" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Profile</a>
            </div>
            
         
        </div>
        

    );
}





export default SideBar;