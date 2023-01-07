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
            <div className="container-fluid" style={{ backgroundColor: '#181818', display: 'grid', height: 750, gridTemplateColumns: '50% 10% 50%', gridTemplateRows: '7.84% 92.16%' }}>
            <div className='navbar' style={{ display: 'grid', backgroundColor: '#1E0B39', gridColumn: '1 /span 3', gridTemplateColumns: '7.5% 92.5%', gridTemplateRows: '100%' }}>

            <div className='image'>
                <img src={logo} alt='logo' style={{ placeSelf: 'center', minWidth: '40%', maxWidth: '50%' }}></img>
            </div>

            <div className='tabs'>
                <ul style={{ display: 'flex', justifyContent: 'flex-end', placeSelf: 'center', listStyle: 'none' }}>
                    <a href="www.google.com" style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em',textDecoration:"none"}}>Home</a>
                    <a href="www.google.com" style={{
                        padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "white", textDecoration: 'underline', textDecorationColor: "#FBBC05",
                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05', letterSpacing: '0.02em'
                    }}>About</a>
                    <a href="www.google.com" style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em',textDecoration:"none"}}>Itinerary</a>
                    <a href="www.google.com" style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em',textDecoration:"none"}}>Committees</a>
                    <a href="www.google.com" style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em',textDecoration:"none"}}>Profile</a>
                </ul>
            </div>
            </div>
            <div>
            <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"10%",paddingTop:"15%",fontWeight:"bold",fontSize:"100%"}}>About us</p>
                <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"10%",fontWeight:"bold",fontSize:"75%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt.voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
            </div>
            <div>
                <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"200%",paddingTop:"20%",fontWeight:"bold",textAlign:"center",paddingLeft:"20%"}}>ABOUT</p>
            </div>
            <div>
            <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"30%",paddingTop:"30%",fontWeight:"bold",fontSize:"100%"}}>Venue</p>
            <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"30%",fontWeight:"bold",fontSize:"80%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt<br/> voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
            <img src={map} align="right" height="10%" width="110%" style={{paddingRight:"30%"}}></img>

            </div>
        <div>
        </div>
        </div>
        </div>
        
    );
}

export default About;