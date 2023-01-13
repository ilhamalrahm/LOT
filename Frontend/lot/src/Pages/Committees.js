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
import Footer from '../Components/Footer';
import SideBar from '../Components/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Navmob from '../Components/Navmob';

const Committees=()=>{
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

    useEffect(()=>{
        document.getElementById("committees").style.textDecoration="underline";
        document.getElementById("committees").style.textDecorationColor= "#FBBC05"

    },[])

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style={{backgroundColor:"#181818",width:"100vw",height:"100vh",overflowY:"scroll"}}>

            {elem}
            <SideBar/>

            <div className="mainarea d-flex flex-wrap flex-row align-items-center justify-content-around py-3">
                <div className="img_contain m-2 d-flex justify-content-center">
                    <Card href="this is the link" h="40%" w="40%" im={india} name="ths is the name" org="Description: Freeze date 30th March 1977" hash="Coming Soon!" style={{backgroundColor:"#1E0B39", width:"22rem",minHeight:"20rem",maxHeight:"30rem",borderRadius:"10px",boxShadow:"4px 3px 4px"}}/>
                </div>

                <div className="img_contain m-2 d-flex justify-content-center">
                    <Card href="this is the link" h="20%" w="20%" im={UN} name="ths is the name" org="Description: Discussion and Deliberation role and legality of private military contractors in conflict regions." hash="Coming soon" style={{backgroundColor:"#1E0B39", width:"22rem",minHeight:"20rem",maxHeight:"30rem",borderRadius:"10px",boxShadow:"4px 3px 4px"}}/>
                </div>


                <div className="img_contain m-2 d-flex justify-content-center">
                    <Card href="this is the link" h="40%" w="40%" im={UNY} name="ths is the name" org="Description: Protection of civilians in conflict and non-conflict areas with particular emphasis on women and children" hash="Coming Soon!" style={{backgroundColor:"#1E0B39", width:"20rem",minHeight:"20rem",maxHeight:"30rem", borderRadius:"10px",boxShadow:"4px 3px 4px"}}/>
                </div>


                <div className="img_contain m-2 d-flex justify-content-center">
                    <Card href="this is the link" h="40%" w="40%" im={Crisis} name="ths is the name" org="Description: Crisis Committee" hash="Coming Soon!" style={{backgroundColor:"#1E0B39", width:"22rem",minHeight:"20rem",maxHeight:"30rem",borderRadius:"10px",boxShadow:"4px 3px 4px"}}/>
                </div>


                <div className="img_contain m-2 d-flex justify-content-center">
                    <Card href="this is the link" h="40%" w="40%" im={Social} name="ths is the name" org="Description: Discussion on legalities and development of technologies with implications in space militarization" hash="Coming Soon!" style={{backgroundColor:"#1E0B39", width:"20rem",minHeight:"22rem",maxHeight:"30rem",borderRadius:"10px",boxShadow:"4px 3px 4px"}}/>
                </div>


                <div className="img_contain m-2 d-flex justify-content-center">
                    <Card href="this is the link" h="40%" w="40%" im={Security} name="ths is the name" org="Description: Discuss on ways to counter funding of extremist and non state actors" hash="Coming Soon!" style={{backgroundColor:"#1E0B39", width:"20rem",minHeight:"22rem",maxHeight:"30rem",borderRadius:"10px",boxShadow:"4px 3px 4px"}}/>
                </div>


                
                
            </div>

            <Footer/>

            
                
        </div>


    );
}


const Card=(props)=>{
    console.log(props);
    const {name,href,hash,org,im,h,w}=props;
    console.log(name);
    
    const [show,setShow]=useState(true);

    const Show=()=>{
      setShow(!show);
      if(show==true)
      {
        document.getElementById(org).style.fontSize="1.0rem";
      }
      else{
        document.getElementById(org).style.fontSize="0.0rem";
      }

    }
  return(

    <div className="filecard py-2  my-3 position-relative d-flex flex-row text-wrap justify-content-start align-items-center" style={props.style}>
   

    <img src={im} className="position-relative text-break px-2 m-0" alt="" style={{height:"40%",width:"40%"}} /> <br/>

    <div className="textt d-flex flex-column p-2" style={{width:"70%"}}>
      
         <p className="pdfname text-break text-white" style={{fontSize:"1.0rem"}}>{org}</p>
 
       
        <div className="btn show signin text-white bg-dark" onClick={Show} style={{borderRadius:"15px",fontSize:"1.0rem",backgroundColor:"black",borderColor:"#FBBC05"}}>Show Agenda</div>
       

        <p className="pdfname hashcode text-white text-break py-2" name="hashcode" id={org} style={{fontSize:"0.0rem" ,visibility:"visible",transition:"0.5s"}}>{hash}</p>
            
      
       
            
    </div>
   
    
   
    


     
   </div>
  );
}

export default Committees;