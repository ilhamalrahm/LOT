import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../Pages/map.png';
import logo from '../Pages/logo.png'


const Navbar=()=>{
    return(

        <div className='navbar' style={{ display: 'grid', backgroundColor: '#1E0B39', gridColumn: '1 /span 3', gridTemplateColumns: '7.5% 92.5%', gridTemplateRows: '100%',width:"100%" }}>

                    <div className='image d-flex flex-row'>
                        <img className='logo' src={logo} alt='logo' style={{ placeSelf: 'center', maxWidth: '70%',marginLeft:"10%" }}></img>
                        <p className="MUN text-white px-5 pt-3 text-nowrap" style={{fontSize:"1.5rem"}}>Manipal MUN</p>
                        
                    </div>
                    

                 

                    <div className='tabs p-2'>
                                <ul style={{ display: 'flex', justifyContent: 'flex-end', placeSelf: 'center', listStyle: 'none' }}>
                                
                                    <a className='p-1' id="home" href="/landing" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Home</a>

                                    <a className='p-1' id="about" href="/about" style={{
                                        fontSize:"1rem",
                                         fontFamily: 'Poppins', color: "#FFFFFF", textDecoration: 'none', textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'
                                    }}>About</a>

                                    <a className='p-1' id="itinerary" href="/itinerary" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Itinerary</a>

                                    <a className='p-1' id="committees" href="/committees" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF", textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Committees</a>

                                    <a className='p-1' id="profile" href="/profile" style={{ fontSize:"1rem", fontFamily: 'Poppins', color: "#FFFFFF",textDecoration:"none",textDecorationColor: "#FBBC05",
                                        textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05'}}>Profile</a>
                                </ul>
                    </div>
                
        </div>

        

    );
}





export default Navbar;