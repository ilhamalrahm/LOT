import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import bg from './bg.png';
import logo from './logo.png';
import mun from './mun.png';
import date from './date.png';
import Navbar from '../Components/Navbar';





const Home=()=>{

    const navigate = useNavigate();

    var context=useTheState()
    var dispatch=useStateDispatch()
    console.log("context is  "+context.email)
    
    var userdetails={
        email:localStorage.getItem("email"),
        name:localStorage.getItem("name"),  
        token:localStorage.getItem("token"),

        
    }

    const ToRegister=()=>{
        console.log("in register click")
        navigate("/signup");
    }



    useEffect(()=>{
        // const checkUser=async()=>{
        //     axios.get("/api/user/home",{token:context.token}).then((res)=>{
        //         console.log(res.data);
        //         console.log("usecheck")

        //     }).catch(err=>{
        //         console.log("error occured " +err);
        //         navigate("/signIn")
        //     });
        // }
        // checkUser();
        document.getElementById("home").style.textDecoration="underline";
    },[]);

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div classNameName="main" style={{backgroundImage:`url(${bg})`,height:"100vh",width:"100vw"}}>
            
            <Navbar/>


            <div>
                <img align="center" src={logo} style={{height:"15%",width:"15%",padding:"2%"}}></img>
            </div>


            <div>
                <img classNameName="date" src={date} style={{padding:"1%"}}></img>
            </div>


            <div>
                <button onClick={ToRegister} style={{border:"none",color:"white",backgroundColor:"indigo",fontSize:"150%"}}>Register Now</button>
            </div>


            <div>
                <img classNameName="mun d-flex" src={mun} style={{height:"100%",width:"100%",padding:"3%"}}></img>
            </div>
            
        </div>


    );
}

export default Home;