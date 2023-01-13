import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../Pages/map.png';
import logo from '../Pages/logo.png'
import linkedin from '../images/linkedin.svg'
import mist from '../images/logoLight.png'
import instagram from '../images/insta.svg'



const Footer=()=>{
    return(

        <div className="footerarea d-flex flex-column m-0 py-0" style={{width:"100vw",height:"auto",backgroundColor:"#11071F"}}>
                <div className="firstline d-flex flex-row justify-content-between p-2" style={{width:"100vw"}}>

                    <div className="image-text d-flex flex-row p-0 m-0">

                        <img className='logo p-0 m-2' src={logo} alt='logo' style={{ placeSelf: 'center', maxWidth: '4%',maxheight:"4%", marginLeft:"10%" }}></img>
                        <p className="MUN text-white pt-3" style={{fontSize:"0.8rem"}}>Manipal MUN</p>

                    </div>
 
                    
                    <a href="" className="intagram p-2 my-0 float-end"><img className="instagram float-end" src={instagram}  style={{height:"50%",width:"auto"}}alt=""  /></a>
                </div>

                <div className="contact text-white d-flex px-3 py-0 my-0">

                    <p className="contact px-3" style={{fontSize:"1rem"}}>Contact Us:</p>

                </div>

                <div className="contacts d-flex flex-row text-white px-3 py-0 my-0" style={{width:"100vw"}}>

                    <div className="positions d-flex flex-column p-0 m-0">
                        <p className="postion1 px-3 py-0 my-0" style={{fontSize:"0.8rem"}}>Secretary General : Vinayak Gupta</p>

                        <div className="links d-flex flex-row justify-content-between px-3 m-0">
                            <div className="social p-0 m-0">
                                <a href="" className="intagram  py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={instagram}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                                <a href="" className="intagram py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={linkedin}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                            </div>
                            <div className="phone">
                                <p className="phone py-2" style={{fontSize:"0.6rem"}}>+91 75065 48486</p>
                            </div>
                          

                        </div>
                       

                    </div>

                    <div className="positions d-flex flex-column p-0 m-0">
                        <p className="postion1 px-3 py-0 my-0" style={{fontSize:"0.8rem"}}>Secretary General : Vinayak Gupta</p>

                        <div className="links d-flex flex-row justify-content-between px-3 m-0">
                            <div className="social p-0 m-0">
                                <a href="" className="intagram  py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={instagram}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                                <a href="" className="intagram py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={linkedin}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                            </div>
                            <div className="phone">
                                <p className="phone py-2" style={{fontSize:"0.6rem"}}>+91 75065 48486</p>
                            </div>
                          

                        </div>
                       

                    </div>

                    <div className="positions d-flex flex-column p-0 m-0">
                        <p className="postion1 px-3 py-0 my-0" style={{fontSize:"0.8rem"}}>Secretary General : Vinayak Gupta</p>

                        <div className="links d-flex flex-row justify-content-between px-3 m-0">
                            <div className="social p-0 m-0">
                                <a href="" className="intagram  py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={instagram}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                                <a href="" className="intagram py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={linkedin}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                            </div>
                            <div className="phone">
                                <p className="phone py-2" style={{fontSize:"0.6rem"}}>+91 75065 48486</p>
                            </div>
                          

                        </div>
                       

                    </div>
                    
                </div>

                <hr className="line" style={{borderTop:"1.5px solid gray"}} />

                <div className="copyright text-white">
                   <p className="rights" style={{color:"gray",fontSize:"0.7rem"}}>© Copyright © 2023 All rights reserved | Powered by Manipal Information Security Team <img src={mist} alt="" className="mist px-1" style={{width:"2.5rem"}} /></p> 
                </div>


            </div>


    );
}

export default Footer;