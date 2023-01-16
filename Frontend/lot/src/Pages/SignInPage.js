import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Components/Navbar';
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Footer';
import SideBar from '../Components/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Navmob from '../Components/Navmob';
const SignInPage=()=>{
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
    const dispatch=useStateDispatch();

    var userdetails={
        email:localStorage.getItem("email"),
        name:localStorage.getItem("name"),  
        token:localStorage.getItem("token"),
        college:localStorage.getItem("college"),
        committee:localStorage.getItem("committee"),
        assigned:localStorage.getItem("assigned"),
        
    }
    useEffect(()=>{
        if(userdetails.email!=null){
            navigate("/profile")
        }

    },[])

    const HandleSubmit=()=>{
       var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
     

        axios.post("/api/user/signIn",{email,password}).then((res)=>{
            console.log("Signin res " +res.data.context.college)
            localStorage.setItem('email',res.data.context.email)
            localStorage.setItem('name',res.data.context.name)
            localStorage.setItem('token',res.data.context.token)
            localStorage.setItem('college',res.data.context.college)
            localStorage.setItem('committee',res.data.context.committee)
            localStorage.setItem('assigned',res.data.context.assigned)
            var newstate=dispatch({type:"set",payload:res.data.context})

            // navigate("/profile");
            
            
        }).then(()=>{
            axios.get("/api/user/home").then((res)=>{
                console.log(res.status)
                navigate("/profile");
    
            }).catch((error)=>{
                console.log(error)
                navigate('/signin');
            })
        })
    }

    return(
        //HTML code here(Use inline CSS and bootstrap)

        <div className='position-relative' style={{ margin: 0, padding: 0,backgroundColor: '#181818',height:"100vh",width:"100vw",overflowY:"scroll",overflowX:"hidden" }}>
            <div className="bar">
            {elem}

            </div>
            <SideBar/>
        

        <div className="c position-relative d-flex justify-content-start w-100 h-100" >

            <div className='details position-relative p-5' style={{ backgroundColor: '#1E0B39', fontFamily: "Poppins",height:"100%", width:"100%"  }}>
                <h1 className='text-bold' style={{ color: 'white', padding: "5% 14% 0% 14%",fontWeight:"bold" }}>Log in</h1>
                <p style={{color:"gray"}} className="welcome">Welcome, please Log in if you have already registered!</p>
                <div className="details " style={{ color: '#FFB703', textAlign: 'left' }}>
                    <form action="noaction.php">
                  
                        <div className="formgroup2 position-relative" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%' }}>
                            Email ID <br></br>
                            <input type="email" id="email" className="email p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                
                        <div className="formgroup4" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '3%' }}>
                            Password <br></br>
                            <input type="password" id="password" className="password p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                      
                        <div className="formgroup6 d-flex justify-content-center" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '3%' }}>
                            
                            <input className="btn btn-primary" onClick={HandleSubmit} type="button" value="Login" style={{backgroundColor:"#11071F"}}/>
                        </div>
                        
                    </form>
                    
                </div>
                <p style={{color:"gray"}} className="welcome">Not Registered? Go to <a href="/signup" className="register">Register</a></p>
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
        // <div className="mainx`">
        //     <h1 className="email">Email</h1>
        //     <input id="email" type="text" />
        //     <h1 className="username">password</h1>
        //     <input id="password" type="text" />
        //     <input id="button" onClick={HandleSubmit} type="button" />


        // </div>


    );
}

export default SignInPage;