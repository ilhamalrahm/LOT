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

                    <div style={{ padding: '4% 7% 0% 7%' }}>
                        <hr style={{ borderTop: '3px solid #FFFFFF', width: '100%', zIndex: 5 }}></hr>
                    </div>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '190px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '186px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '328px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '324px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '466px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '462px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '604px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '600px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '742px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '738px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '880px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '876px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '1018px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '1014px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '1156px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '1152px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '1294px', top: '333px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '1290px', top: '329px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>


                    {/* DAY 2 */}
                    <h3 style={{ color: '#FFB703', padding: '10% 10% 0% 0%', fontFamily: 'Plus Jakarta Sans', fontStyle: 'normal', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', letterSpacing: '0.02em' }}>Day 2</h3>

                    <div style={{ padding: '4% 7% 0% 7%' }}>
                        <hr style={{ borderTop: '3px solid #FFFFFF', width: '100%', zIndex: 5 }}></hr>
                    </div>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '190px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '186px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '328px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '324px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '466px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '462px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '604px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '600px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '742px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '738px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '880px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '876px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '1018px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '1014px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '1156px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '1152px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                    <span style={{ position: 'absolute', height: '25px', width: '25px', backgroundColor: '#FFFFFF', borderRadius: '50%', zIndex: 6, left: '1294px', top: '589px' }}></span>
                    <span style={{ boxSizing: 'border-box', position: 'absolute', width: '33px', height: '33px', left: '1290px', top: '585px', border: '1px solid #FFB703',borderRadius:'50%'}}></span>

                </div>

            </div>
        </div >
    );
}

export default Itinerary;