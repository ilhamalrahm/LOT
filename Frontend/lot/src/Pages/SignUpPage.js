import React, { useContext, useState,useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Components/Navbar';
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";

const SignUpPage=()=>{

    const navigate = useNavigate();
    var context=useTheState()
    var dispatch=useStateDispatch()

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
        console.log("submitting")
       var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        var confirm=document.getElementById('confirm').value;
       var name=document.getElementById('name').value;
       var college=document.getElementById('college').value;

       if(password!=confirm)
       {
        alert("Passwords dont match!")
       }
       else{

        axios.post("/api/user/signUp",{email,password,name,college}).then(res=>{
            console.log(res.data);
            navigate("/signin");
        })

       }

    

        
    }

    return(
        //HTML code here(Use inline CSS and bootstrap)
        // <div className="main">
        //     <h1 className="email">Email</h1>
        //     <input id="email" type="text" />
        //     <h1 className="username">name</h1>
        //     <input id="name" type="text" />
        //     <h1 className="username">password</h1>
        //     <input id="password" type="text" />
        //     <input id="button" onClick={HandleSubmit} type="button" />

        // </div>

        <div className='position-relative' style={{ margin: 0,overflow:"hidden", padding: 0,backgroundColor: '#181818',height:"100vh",width:"100vw" }}>
        <div className="bar">
            <Navbar/>

        </div>
        

        <div className="c position-relative d-flex justify-content-end w-100 h-100" >

            <div className='details position-relative' style={{ backgroundColor: 'white', fontFamily: "Plus Jakarta Sans",height:"100%", width:"60%"  }}>
                <h1 className='text-bold' style={{ color: 'black', padding: "5% 14% 0% 14%", }}>Register</h1>
                <p style={{color:"gray"}} className="welcome">Welcome, please enter your details!</p>
                <div className="details " style={{ color: '#FFB703', textAlign: 'left' }}>
                    <form action="noaction.php">
                        <div className="formgroup1" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%' }}>
                            <span style={{ padding: '0% 0% 5% 0%' }}>Name</span> <br></br>
                            <input type="text" id="name" className="name p-2" style={{fontSize:"1rem", width: '100%'}}/>
                        </div>
                        <div className="formgroup2 position-relative" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Email ID <br></br>
                            <input type="email" id="email" className="email p-2" style={{fontSize:"1rem", width: '100%'}}/>
                        </div>
                        <div className="formgroup3" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            College <br></br>
                            <input type="text" id="college" className="college p-2" style={{fontSize:"1rem", width: '100%'}}/>
                        </div>
                        <div className="formgroup4" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Password <br></br>
                            <input type="password" id="password" className="password p-2" style={{fontSize:"1rem", width: '100%'}}/>
                        </div>
                        <div className="formgroup5" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Confirm Password <br></br>
                            <input type="password" id="confirm" className="confirm p-2" style={{fontSize:"1rem", width: '100%'}}/>
                        </div>
                        <div className="formgroup6" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            
                            <input className="btn btn-primary" onClick={HandleSubmit} type="button" value="Register" style={{backgroundColor:"#1E0B39"}}/>
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
      

        

        


</div>


    );
}

export default SignUpPage;