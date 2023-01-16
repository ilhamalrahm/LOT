import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../images/map.png';
import logo from '../images/logo.png'
import linkedin from '../images/linkedin.svg'
import mist from '../images/logoLight.png'
import instagram from '../images/insta.svg'



const Footer=()=>{
    return(

        <div className="footerarea d-flex flex-column m-0 py-0" style={{width:"100%",height:"auto",backgroundColor:"#11071F"}}>
                <div className="firstline d-flex flex-row justify-content-between p-2" style={{width:"100%"}}>

                    <div className="image-text d-flex flex-row p-0 m-0">

                        <img className='logo p-0 m-2' src={logo} alt='logo' style={{ placeSelf: 'center', maxWidth: '4%',maxheight:"4%", marginLeft:"10%" }}></img>
                        <p className="MUN text-white pt-3" style={{fontSize:"0.8rem"}}> <b className="bold">Manipal MUN 2023</b></p>

                    </div>
 
                    
                    <a href="https://instagram.com/manipalmun?igshid=YWJhMjlhZTc=" className="intagram p-2 my-0 float-end"><img className="instagram float-end" src={instagram}  style={{height:"40%",width:"auto"}}alt=""  /></a>
                </div>

                <div className="contact text-white d-flex px-3 py-0 my-0">

                    <p className="contact px-3" style={{fontSize:"1rem"}}>Contact Us:</p>

                </div>

                <div className="contacts d-flex flex-row text-white px-3 py-0 my-0" style={{width:"100vw"}}>

                    <div className="positions d-flex flex-column p-0 m-0">
                        <p className="postion1 px-3 py-0 my-0" style={{fontSize:"0.8rem"}}>Secretary General : Vinayak Gupta</p>

                        <div className="links d-flex flex-row justify-content-between px-3 m-0">
                            <div className="social p-0 m-0">
                                <a href="https://instagram.com/imtpt?igshid=YmMyMTA2M2Y=" className="intagram  py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={instagram}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                                <a href="" className="intagram py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={linkedin}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                            </div>
                            <div className="phone">
                                <p className="phone py-2" style={{fontSize:"0.6rem"}}>+91 75065 48486</p>
                            </div>
                          

                        </div>
                       

                    </div>

                    <div className="positions d-flex flex-column p-0 m-0">
                        <p className="postion1 px-3 py-0 my-0" style={{fontSize:"0.8rem"}}>Deputy Secretary General : Daksh Soni</p>

                        <div className="links d-flex flex-row justify-content-between px-3 m-0">
                            <div className="social p-0 m-0">
                                <a href="https://www.instagram.com/daksh.png/" className="intagram  py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={instagram}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                                <a href="https://www.linkedin.com/in/daksh-soni-069420/" className="intagram py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={linkedin}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                            </div>
                            <div className="phone">
                                <p className="phone py-2" style={{fontSize:"0.6rem"}}>+91 86181 64598</p>
                            </div>
                          

                        </div>
                       

                    </div>

                    <div className="positions d-flex flex-column p-0 m-0">
                        <p className="postion1 px-3 py-0 my-0" style={{fontSize:"0.8rem"}}>Director General : Deepthi PN</p>

                        <div className="links d-flex flex-row justify-content-between px-3 m-0">
                            <div className="social p-0 m-0">
                                <a href="https://instagram.com/i.deepthii?igshid=YWJhMjlhZTc=" className="intagram  py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={instagram}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                                <a href="https://www.linkedin.com/in/deepthi-p-b8ab171b5" className="intagram py-0 m-0 "><img className="instagram float m-0 py-0 px-1" src={linkedin}  style={{height:"0.7rem",width:"auto"}}alt=""  /></a>
                            </div>
                            <div className="phone">
                                <p className="phone py-2" style={{fontSize:"0.6rem"}}>+91 99729 03171</p>
                            </div>
                          

                        </div>
                       

                    </div>
                    
                </div>

                <hr className="line" style={{borderTop:"1.5px solid gray"}} />

                <div className="copyright text-white">
                   <p className="rights" style={{color:"gray",fontSize:"0.7rem"}}>© Copyright © 2023 All rights reserved | Powered by Manipal Information Security Team <a href="https://wearemist.in" className="mistlink"> <img src={mist} alt="" className="mist px-1" style={{width:"2.5rem"}} /></a> </p> 
                </div>


            </div>


    );
}

export default Footer;