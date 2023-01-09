import React, { useContext, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useStateDispatch } from '../Context';

const SignInPage=()=>{

    const navigate = useNavigate();
    const dispatch=useStateDispatch();
    var userdetails={
        email:localStorage.getItem("email"),
        name:localStorage.getItem("name"),  
        token:localStorage.getItem("token"),
        
    }

    const HandleSubmit=()=>{
       var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
     

        axios.post("/api/user/signIn",{email,password}).then((res)=>{
            console.log("Signin res " +res)
            localStorage.setItem('email',res.data.context.email)
            localStorage.setItem('name',res.data.context.name)
            localStorage.setItem('token',res.data.context.token)
            var newstate=dispatch({type:"set",payload:res.data.context})

            navigate("/landing");
            
            
        })
    }

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="mainx`">
            <h1 className="email">Email</h1>
            <input id="email" type="text" />
            <h1 className="username">password</h1>
            <input id="password" type="text" />
            <input id="button" onClick={HandleSubmit} type="button" />


        </div>


    );
}

export default SignInPage;