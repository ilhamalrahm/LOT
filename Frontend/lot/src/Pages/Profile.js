import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from './img1.png';

const Profile = () => {


    return (
        <div style={{ margin: 0, padding: 0 }}>
            <div className="container-fluid" style={{ backgroundColor: '#181818', display: 'grid', height: 750, gridTemplateColumns: '7.5% 67.5% 25%', gridTemplateRows: '7.84% 92.16%' }}>

                <div className='navbar' style={{ display: 'grid', backgroundColor: '#1E0B39', gridColumn: '1 /span 3', gridTemplateColumns: '7.5% 92.5%', gridTemplateRows: '100%' }}>

                    <div className='image'>
                        <img src={map} alt='logo' style={{ placeSelf: 'center', minWidth: '40%', maxWidth: '50%' }}></img>
                    </div>

                    <div className='tabs'>
                        <ul style={{ display: 'flex', justifyContent: 'flex-end', placeSelf: 'center', listStyle: 'none' }}>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>Home</li>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>About</li>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>Itinerary</li>
                            <li style={{ padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", letterSpacing: '0.02em' }}>Committees</li>
                            <li style={{
                                padding: "3% 2.5% 2% 2.5%", fontFamily: 'Plus Jakarta Sans', color: "#FFFFFF", textDecoration: 'underline', textDecorationColor: "#FBBC05",
                                textDecorationThickness: 3, textShadow: '0px 0px 5px #FBBC05', letterSpacing: '0.02em'
                            }}>Profile</li>
                        </ul>
                    </div>

                </div>

                <div className='blank' style={{ gridColumn: '1 /span 2' }}>
                </div>

                <div className='details' style={{ backgroundColor: 'black', fontFamily: "Plus Jakarta Sans" }}>
                    <h1 style={{ color: '#FFFFFF', padding: "14% 14% 0% 14%", }}>Profile</h1>
                    <div className="details" style={{ color: '#FFB703', textAlign: 'left' }}>
                        <form action="noaction.php">
                            <div className="formgroup1" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%' }}>
                                <span style={{ padding: '0% 0% 20% 0%' }}>Name</span> <br></br>
                                <input type="text" name="" style={{ width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%' }}></input>
                            </div>
                            <div className="formgroup2" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%' }}>
                                Email ID <br></br>
                                <input type="email" name="" style={{ width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%' }}></input>
                            </div>
                            <div className="formgroup3" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%' }}>
                                College <br></br>
                                <input type="email" name="" style={{ width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%' }}></input>
                            </div>
                            <div className="formgroup4" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%' }}>
                                Committee <br></br>
                                <input type="text" name="" style={{ width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%' }}></input>
                            </div>
                            <div className="formgroup5" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%' }}>
                                Assigned As <br></br>
                                <input type="text" name="" style={{ width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%' }}></input>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;