import React, { useContext, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const SignUpPage=()=>{

    const HandleSubmit=()=>{
       var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
       var name=document.getElementById('name').value;

        axios.post("/api/user/signUp",{email,password,name}).then(res=>{
            console.log(res.data);
        })
    }

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main">
            <h1 className="email">Email</h1>
            <input id="email" type="text" />
            <h1 className="username">name</h1>
            <input id="name" type="text" />
            <h1 className="username">password</h1>
            <input id="password" type="text" />
            <input id="button" onClick={HandleSubmit} type="button" />

        </div>


    );
}

export default SignUpPage;