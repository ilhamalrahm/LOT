import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../images/map.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useMediaQuery } from 'react-responsive';
import SideBar from '../Components/Sidebar';
import Navmob from '../Components/Navmob';

const UpdateSoon=()=>{
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

    useEffect(()=>{
        document.getElementById("itinerary").style.textDecoration="underline";
        document.getElementById("itinerary").style.textDecorationColor= "#FBBC05"

    },[])




    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className='main position-absolute' style={{ margin: 0, padding: 0 ,backgroundColor: '#1E0B39',width:"100vw",height:"100vh",overflowY:"scroll",overflowX:"hidden"}}>
            <div className="main" style={{ backgroundColor: '#1E0B39"', display: 'grid', height: 750, gridTemplateColumns: '100%', gridTemplateRows: '7.84% 92.16%' }}>

            <div className="navb">
            {elem}
            <SideBar/>

            </div>
                

                <div className="body d-flex flex-column justify-content-center" style={{ padding: '5% 6.94% 6.94% 6.94%' }}>

                    <h1 style={{ color: 'white', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.02em',padding:"5%" }}>Page will be Updated Soon!</h1>


                 

               
                </div>
                

            </div>
            <Footer/>
        
        </div >


    );
}

export default UpdateSoon;