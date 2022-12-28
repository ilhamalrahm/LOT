import React, { useContext, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const SignUpPage=()=>{

    const HandleSubmit=()=>{
       var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
       var name=document.getElementById('name').value;

        axios.post("/api/user/signUp",{username,password,name}).then(res=>{
            console.log(res.data);
        })
    }

    return(
        <div className="main">
            <h1 className="username">Username</h1>
            <input id="username" type="text" />
            <h1 className="username">name</h1>
            <input id="name" type="text" />
            <h1 className="username">password</h1>
            <input id="password" type="text" />
            <input id="button" onClick={HandleSubmit} type="button" />

        </div>


    );
}

export default SignUpPage;