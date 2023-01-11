import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import india from '../images/indian.png'
import UN from '../images/UN.png'
import UNY from '../images/UNY.png'
import Crisis from '../images/Crisis.png'
import Social from '../images/Social.png'
import Security from '../images/Security.png'

const Committees=()=>{

    useEffect(()=>{
        document.getElementById("committees").style.textDecoration="underline";
        document.getElementById("committees").style.textDecorationColor= "#FBBC05"

    },[])

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style={{backgroundColor:"#181818",width:"100vw",height:"100vh",overflowY:"scroll"}}>

            <Navbar/>

            <div className="mainarea d-flex flex-wrap flex-row align-items-center justify-content-around py-3">
                <div className="img_contain m-2">
                    <img src={india} alt="" className="image pt-5" style={{width:"60%",height:"60%"}} />
       
                </div>
                <div className="img_contain m-2">
                    <img src={UN} alt="" className="image pt-5" style={{width:"60%",height:"60%"}} />
                    
                </div>
                <div className="img_contain m-2">
                    <img src={UNY} alt="" className="image pt-5" style={{width:"60%",height:"60%"}} />
                    
                </div>
                <div className="img_contain m-2">
                    <img src={Crisis} alt="" className="image pt-5" style={{width:"60%",height:"60%"}} />    
                </div>
                <div className="img_contain m-2">
                    <img src={Social} alt="" className="image pt-5" style={{width:"60%",height:"60%"}} />    
                </div>
                <div className="img_contain m-2">
                    <img src={Security} alt="" className="image pt-5" style={{width:"60%",height:"60%"}} />    
                </div>
                
            </div>
                
        </div>


    );
}

export default Committees;