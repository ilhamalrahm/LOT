import React, { useContext, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useStateDispatch } from '../Context';

const SignInPage=()=>{

    const navigate = useNavigate();
    const dispatch=useStateDispatch();
    var userdetails={
        username:localStorage.getItem("username"),
        name:localStorage.getItem("name"),
        team:localStorage.getItem("team"),
        token:localStorage.getItem("token"),
        
    }

    const HandleSubmit=()=>{
       var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
     

        axios.post("/api/user/signIn",{username,password}).then((res)=>{
            console.log("Signin res " +res)
            dispatch({type:"set",payload:res.data.context})

            navigate("/home");
            
            
        })
    }

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="mainx`">
            <h1 className="username">Username</h1>
            <input id="username" type="text" />
            <h1 className="username">password</h1>
            <input id="password" type="text" />
            <input id="button" onClick={HandleSubmit} type="button" />


        </div>


    );
}

export default SignInPage;