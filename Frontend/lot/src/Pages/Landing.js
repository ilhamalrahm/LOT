import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";

const Home=()=>{

    const navigate = useNavigate();

    var context=useTheState()
    var dispatch=useStateDispatch()
    console.log("context is  "+context.username)



    useEffect(()=>{
        const checkUser=async()=>{
            axios.get("/api/user/home",{token:context.token}).then((res)=>{
                console.log(res.data);
                console.log("usecheck")

            }).catch(err=>{
                console.log("error occured " +err);
                navigate("/signIn")
            });
        }
        checkUser();
    },[]);

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main">
            <h1 className="username">Usernamedsflhsdalfjas;</h1>
            <input id="username" type="text" />
    
            <h1 className="username">name</h1>
            <input id="name" type="text" />
            <h1 className="username">password</h1>
            <input id="password" type="text" />
            <input id="button"  type="button" />

        </div>


    );
}

export default Home;