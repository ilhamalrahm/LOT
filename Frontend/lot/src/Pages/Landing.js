import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import bg from '../images/bg.png';
import logo from '../images/logo.png';
import mun from '../images/mun.png';
import date from '../images/date.png';
import Navbar from '../Components/Navbar';
import instagram from '../images/insta.svg'
import Footer from '../Components/Footer';
import { useMediaQuery } from 'react-responsive';
import Navmob from '../Components/Navmob';
import SideBar from '../Components/Sidebar';






const Home=()=>{

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
    const ToLogin=()=>{

        navigate("/signin");

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
        document.getElementById("home").style.textDecorationColor= "#FBBC05"
    },[]);

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style={{height:"100vh",width:"100vw",overflowY:"scroll",backgroundColor:"#11071F"}}>
            
            {elem}
            <SideBar/>
            <div className="area d-flex flex-column justify-content-center p-5" style={{backgroundImage:`url(${bg})`,backgroundPosition:"center",height:"90%",width:"100%"}}>

                <div>
                    <img align="center" src={logo} style={{height:"15rem",width:"15rem",padding:"2%"}}></img>
                </div>


                <div>
                    <p className="date text-white" style={{fontSize:"2rem"}}>17-19th February 2023</p>{/* <img className="date" src={date} style={{padding:"2%",height:"8rem",width:"23rem"}}></img> */}
                </div>


                <div>
                    <button onClick={ToRegister} style={{border:"none",color:"white",backgroundColor:"indigo",fontSize:"1.5rem"}}>Register Now</button>
                </div>
                {/* <div className='m-2'>
                    <button onClick={ToLogin} style={{border:"none",color:"white",backgroundColor:"indigo",fontSize:"1.5rem"}}>Sign in</button>
                </div> */}


                <div className='d-flex justify-content-center'>
                    <img className="mun d-flex" src={mun} style={{height:"70%",width:"70%",padding:"3%"}}></img>
                </div>

            </div>

            <Footer/>


            
            
        </div>


    );
}

export default Home;