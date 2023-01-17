import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../images/map.png';
import logo from '../images/logo.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import GoogleMapReact from 'google-map-react';
import SideBar from '../Components/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Navmob from '../Components/Navmob';

const About=()=>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 840px)'
      });
      var elem;

      if(!isDesktopOrLaptop)
      {
        elem=<Navmob/>
      }
      else{
        elem=<Navbar/>
      }
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
    useEffect(()=>{
        document.getElementById("about").style.textDecoration="underline";
        document.getElementById("about").style.textDecorationColor= "#FBBC05"

    },[])

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main position-absolute" style={{backgroundColor:"#1E0B39",height:"100vh",width:"100vw",overflowY:"scroll",overflowX:"hidden"}}>
         
                {elem}
                <SideBar/>

                <div className="containerpage d-flex flex-column" style={{backgroundColor:"#1E0B39"}}>

                        <div className="container position-relative">
                            <p className="about p-3" style={{color:"white",fontFamily:"Poppins",fontSize:"2rem",fontWeight:"bolder",textAlign:"center",paddingLeft:"20%"}}>ABOUT</p>
                            <div className="about-us">
                                <p style={{color:"orange",fontFamily:"Poppins",textAlign:"left",paddingLeft:"5%",paddingTop:"5%",fontWeight:"bold",fontSize:"1.5rem",fontWeight:"bold"}}>About us</p>
                                <p style={{color:"white",fontFamily:"Poppins",textAlign:"left",paddingLeft:"5%",fontWeight:"bold",fontSize:"1rem"}}>After the glamorous success of Manipal MUN 2022, the Leaders of Tomorrow are back with yet another edition of Manipal's largest MUN conference, with riveting changes and challenges to make the experience even better.With exciting agendas and challenging committees, this conference is guaranteed to provide an enthralling simulation of the inner workings of international diplomacy and is a perfect avenue through which any participant, despite their experience, can truly feel the vicissitudes and beauty of geopolitics.We proudly reminisce about the success of our previous endeavours, wherein both students and advisors left the conference with a greater understanding of international relations and organisation. We strive to aim higher with each subsequent conference and ameliorate its success. ManipalMUN eagerly awaits the talented participants who will fill its committees and chambers and strives to uphold its time-tested legacy of being one of the most successful and prestigious conferences ever</p>

                            </div>



                        </div>



                        <div className="container position-relative d-flex flex-row justify-content-end" style={{width:"100%"}}>
                                            
                                        <div className="container-venue position-relative d-flex flex-column" style={{width:"50%"}}>
                                            
                                            <p style={{color:"orange",fontFamily:"Poppins",textAlign:"right",paddingRight:"10%",paddingTop:"30%",fontWeight:"bold",fontSize:"1.5rem"}}>Venue</p>
                                            <p style={{color:"white",fontFamily:"Poppins",textAlign:"right",paddingRight:"10%",fontWeight:"bold",fontSize:"1rem"}}>MIT, Manipal</p>
                                            <img src={map} className="pb-3" align="right" height="100%" width="100%" style={{paddingRight:"10%"}}></img>
                                     
                    
                                        </div>
                                            

                        </div>

                        
                </div>

                <Footer/>
                



                

               


               
                

                        
                            
                 
                       
                           
                     
                      

                        
                        
           
        </div>
        
    );
}

export default About;