import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from './img1.png';

const Itinerary = () => {


    return (
        <div className='main' style={{ margin: 0, padding: 0 }}>
            <div className="container-fluid" style={{ backgroundColor: '#181818', display: 'grid', height: 750, gridTemplateColumns: '100%', gridTemplateRows: '7.84% 92.16%' }}>

                <div className='navbar' style={{ display: 'grid', backgroundColor: '#1E0B39', gridTemplateColumns: '7.5% 92.5%', gridTemplateRows: '100%' }}>

                    <div className='image'>
                        <img src={map} alt='logo' style={{ placeSelf: 'center', minWidth: '40%', maxWidth: '50%' }}></img>
                    </div>

                    <div className='tabs'>
                        <ul style={{ display: 'flex', justifyContent: 'flex-end', placeSelf: 'center', listStyle: 'none' }}>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>Home</li>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>About</li>
                            <li style={{
                                padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", textDecoration: 'underline', textDecorationColor: "#FBBC05",
                                textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05', letterSpacing: '0.02em'
                            }}>Itinerary</li>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>Committees</li>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>Profile</li>
                        </ul>
                    </div>

                </div>

                <div className="body" style={{ padding: '5% 6.94% 6.94% 6.94%' }}>

                    <h1 style={{ color: 'white', fontFamily: 'Plus Jakarta Sans', fontStyle: 'normal', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.02em' }}>ITINERARY</h1>


                    {/* DAY 1 */}
                    <h3 style={{ color: '#FFB703', padding: '3.5% 0% 0% 10%', fontFamily: 'Plus Jakarta Sans', fontStyle: 'normal', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', letterSpacing: '0.02em' }}>Day 1</h3>

                    <div className='line1' style={{ padding: '4% 7% 0% 3.5%', display: 'grid', gridTemplateRows: '100%', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
                        <hr style={{ borderTop: '3px solid #FFFFFF', width: '90%', zIndex: 5, top: '10px', gridArea: '1 / 1 / 1 / 10',placeSelf:'center'}}></hr>

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