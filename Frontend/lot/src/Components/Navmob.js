import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../images/map.png';
import logo from '../images/logo.png'


const Navmob=()=>{
    const [tog,setTog]=useState(false);
    const Toggle=()=>{
        setTog(!tog);
        if(tog==false)
        {
          document.getElementById("sidebar").style.visibility="visible";
          console.log(document.getElementById("sidebar").style.visibility);
        }
        else{
          document.getElementById("sidebar").style.visibility="hidden";
          console.log(document.getElementById("sidebar").style.visibility);
        }
      }
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary  navbar-dark text-white" style={{backgroundColor:"#1E0B39"}}>
            <div className="container-fluid text-white">
            <img className='logo p-0 m-0' src={logo} alt='logo' style={{ width:"15%" }}></img>
                <button className="btn primary" onClick={Toggle} type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        

    );
}





export default Navmob;