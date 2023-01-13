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

const Itinerary=()=>{
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
        <div className='main' style={{ margin: 0, padding: 0 ,backgroundColor: '#181818',width:"100vw",height:"100vh"}}>
            <div className="main" style={{ backgroundColor: '#181818', display: 'grid', height: 750, gridTemplateColumns: '100%', gridTemplateRows: '7.84% 92.16%' }}>

            <div className="navb">
            {elem}
            <SideBar/>

            </div>
                

                <div className="body d-flex flex-column" style={{ padding: '5% 6.94% 6.94% 6.94%' }}>

                    <h1 style={{ color: 'white', fontFamily: 'Plus Jakarta Sans', fontStyle: 'normal', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.02em',padding:"5%" }}>ITINERARY</h1>


                    {/* DAY 1 */}
                    <h3 className='heading p-2' style={{ color: '#FFB703', padding: '3.5% 0% 0% 10%', fontFamily: 'Plus Jakarta Sans', fontStyle: 'normal', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', letterSpacing: '0.02em' }}>Day 1</h3>

                    <div className='line1' style={{ padding: '4% 7% 0% 3.5%', display: 'grid', gridTemplateRows: '100%', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
                        <hr style={{ borderTop: '3px solid #FFFFFF', width: '90%', zIndex: 5, top: '10px', gridArea: '1 / 1 / 1 / 10',placeSelf:'center'}}></hr>

                        <span style={{ height: '1.5rem', width: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 1, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 2, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 3, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 4, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 5, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 6, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 7, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 8, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 9, placeSelf: 'center' }}></span>

                        <span style={{ height: '2rem', width: '2rem', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 9, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 8, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 7, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 6, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 5, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 4, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 3, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 2, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 1, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>

                    </div>

                    {/* DAY 2 */}
                    <h3 style={{ color: '#FFB703', padding: '10% 13.5% 0% 10%', fontFamily: 'Plus Jakarta Sans', fontStyle: 'normal', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', letterSpacing: '0.02em' }}>Day 2</h3>

                    <div className='line2' style={{ padding: '4% 7% 0% 3.5%', display: 'grid', gridTemplateRows: '100%', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
                        <hr style={{ borderTop: '3px solid #FFFFFF', width: '90%', zIndex: 5, top: '10px', gridArea: '1 / 1 / 1 / 10',placeSelf:'center' }}></hr>

                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 1, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 2, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 3, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 4, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 5, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 6, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 7, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 8, placeSelf: 'center' }}></span>
                        <span style={{ height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 9, placeSelf: 'center' }}></span>

                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 9, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 8, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 7, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 6, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 5, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 4, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 3, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 2, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>
                        <span style={{ height: '30px', width: '30px', borderRadius: '50%', zIndex: 6, gridRow: 1, gridColumn: 1, placeSelf: 'center', boxSizing: 'border-box', border: '1px solid #FFB703' }}></span>

                    </div>
                </div>
                

            </div>
        
    </div >


    );
}

export default Itinerary;