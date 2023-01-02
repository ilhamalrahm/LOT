import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";

const About=()=>{

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main">
            
        <p style={{color:"red"}}>HELLO</p>

        </div>
        
    );
}

export default About;