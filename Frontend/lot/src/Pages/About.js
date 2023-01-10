import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from './map.png';
import logo from './logo.png'
import Navbar from '../Components/Navbar';

const About=()=>{
    useEffect(()=>{
        document.getElementById("about").style.textDecoration="underline";

    },[])

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style={{backgroundColor:"#181818",height:"100vh",width:"100vw",position:"absolute"}}>
         
                <Navbar/>

                <div className="containerpage d-flex flex-column" style={{backgroundColor:"#181818"}}>

                        <div className="container position-relative">
                            <p className="about p-3" style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"200%",fontWeight:"bold",textAlign:"center",paddingLeft:"20%"}}>ABOUT</p>
                            <div className="about-us">
                                <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"10%",paddingTop:"5%",fontWeight:"bold",fontSize:"100%"}}>About us</p>
                                <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",paddingLeft:"10%",fontWeight:"bold",fontSize:"75%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt.voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>

                            </div>



                        </div>



                        <div className="container position-relative d-flex flex-row justify-content-end" style={{width:"100%"}}>
                                            
                                        <div className="container-venue position-relative d-flex flex-column" style={{width:"50%"}}>
                                            
                                            <p style={{color:"orange",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"15%",paddingTop:"30%",fontWeight:"bold",fontSize:"100%"}}>Venue</p>
                                            <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"right",paddingRight:"15%",fontWeight:"bold",fontSize:"80%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt<br/> voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
                                            <img src={map} align="right" height="10%" width="100%" style={{paddingRight:"10%"}}></img>
                    
                                        </div>
                                            

                        </div>

                </div>

               


               
                

                        
                            
                 
                       
                           
                     
                      

                        
                        
           
        </div>
        
    );
}

export default About;