import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import map from '../images/logo.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SideBar from '../Components/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Navmob from '../Components/Navmob';

const Profile = () => {
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
    var userdetails={
        email:localStorage.getItem("email"),
        name:localStorage.getItem("name"),  
        token:localStorage.getItem("token"),
        college:localStorage.getItem("college")
        
    }
    
    const Logout=()=>{
        axios.get("api/user/logout").then(res=>{
            sessionStorage.clear();
            localStorage.clear();
            navigate('/landing')
        }).catch(err=>{
            console.log("Error occurred .. "+err)
        })
        
    }
    

    useEffect(()=>{
        console.log(context)
        document.getElementById("profile").style.textDecoration="underline";
        document.getElementById("profile").style.textDecorationColor= "#FBBC05"
        // dispatch({type:"set",payload:userdetails})
        console.log(context)
        
        axios.get("/api/user/home").then((res)=>{
            console.log(res.status)
 

        }).catch((error)=>{
            console.log(error)
            navigate('/signin');
        })

    },[])



    return (
        <div className='position-relative' style={{ margin: 0,overflow:"scroll", padding: 0,backgroundColor: '#181818',height:"100vh",width:"100vw" }}>
                <div className="bar">
                {elem}

                </div>
                <SideBar/>
                

                <div className="c position-relative d-flex justify-content-end w-100 h-100" >
                
                {/* <div className="logout position-relative d-flex justify-content-around w-100 ">
                    <h1 className="logout text-red fw-bold text-danger">You tried to Sign in! Log out first</h1>
                </div> */}
                

                <div className='details position-relative' style={{ backgroundColor: 'black', fontFamily: "Poppins",height:"100%", width:"60%" ,borderRadius:"30px" }}>
                <input className="btn btn-primary float-end" onClick={Logout} type="button" value="Logout" style={{backgroundColor:"#1E0B39",borderColor:"black"}}/>
                    <h1 style={{ color: '#FFFFFF', padding: "5% 14% 0% 14%", }}>Profile</h1>
                    <div className="details text-white" style={{ color: '#FFB703', textAlign: 'left' }}>
                        <form action="noaction.php">
                            <div className="formgroup1" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%' }}>
                                <span style={{ padding: '0% 0% 5% 0%' }}>Name</span> <br></br>
                                <input type="text" disabled="true" value={context.name} name="" style={{fontSize:"1rem", width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%',color:"#FBBC05"  }}></input>
                            </div>

                            <div className="formgroup2 position-relative text-white" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%' }}>
                                Email ID <br></br>
                                <input className='text-break' type="email" disabled="true" value={context.email} name="" style={{fontSize:"1rem", width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%',color:"#FBBC05",overflowX:"scroll" }}></input>
                            </div>

                            <div className="formgroup3" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%' }}>
                                College <br></br>
                                <input type="email" value={context.college} disabled="true" name="" style={{fontSize:"1rem", width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%',color:"#FBBC05" }}></input>
                            </div>

                            <div className="formgroup4" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%' }}>
                                Committee <br></br>
                                <input type="text" disabled="true" value={context.committee} name="" style={{ fontSize:"1rem",width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%',color:"#FBBC05" }}></input>
                            </div>

                            <div className="formgroup5" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%' }}>
                                Assigned As <br></br>
                                <input type="text" disabled="true" value={context.assigned} name="" style={{ fontSize:"1rem",width: '100%', background: 'linear-gradient(94.47deg, rgba(0, 0, 0, 0) 3.97%, rgba(0, 0, 0, 0.12) 58.88%, #000000 100.7%)', borderRadius: '5px', border: '1px solid #FFFFFF', padding: '2%',color:"#FBBC05" }}></input>
                            </div>

                        </form>
                    </div>
                </div>

                </div>

                
            

                {/* <div className='navbar' style={{ display: 'grid', backgroundColor: '#1E0B39', gridColumn: '1 /span 3', gridTemplateColumns: '7.5% 92.5%', gridTemplateRows: '100%' }}>

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

                </div> */}
              

                

                

        <Footer/>
        </div>
    );
}

export default Profile;