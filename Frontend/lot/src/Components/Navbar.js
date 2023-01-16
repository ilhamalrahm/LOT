import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../images/map.png';
import logo from '../images/logo.png'


const Navbar=()=>{
    return(

        <div className='navbar' style={{ display: 'grid', backgroundColor: '#1E0B39', gridColumn: '1 /span 3', gridTemplateColumns: '7.5% 92.5%', gridTemplateRows: '100%',width:"100%" }}>

                    <div className='image d-flex flex-row position-relative'>
                        <a href="/" className="landing"> <img className='logo' src={logo} alt='logo' style={{ placeSelf: 'center',maxWidth:"4rem", marginLeft:"10%" }}></img></a>
                        
                       
                        <p className="MUN text-white px-5 pt-3 text-nowrap" style={{fontSize:"1.5rem"}}> <b className="bold">Manipal MUN 2023</b> </p>
                        
                    </div>
                    

                 

                    <div className='tabs p-2'>
                                <ul style={{ display: 'flex', justifyContent: 'flex-end', placeSelf: 'center', listStyle: 'none' }}>
                                
                                    <a className='py-1 px-3' id="home" href="/" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Home</a>

                                    <a className='py-1 px-3' id="about" href="/about" style={{
                                        fontSize:"1rem",
                                         fontFamily: 'Poppins', color: "#FFFFFF", textDecoration: 'none', textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'
                                    }}>About</a>

                                    <a className='py-1 px-3' id="itinerary" href="/itinerary" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Itinerary</a>

                                    <a className='py-1 px-3' id="committees" href="/committees" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF", textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Committees</a>

                                    <a className='py-1 px-3' id="profile" href="/profile" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Profile</a>
                                </ul>
                    </div>
                
        </div>

        

    );
}





export default Navbar;