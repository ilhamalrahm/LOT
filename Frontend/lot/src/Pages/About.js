import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";

const About=()=>{

    return(
        //HTML code here(Use inline CSS and bootstrap)
        <div className="main" style="background-color:black;overflow: hidden;">
            <p>HELLO</p>
            <div class="tab" style="overflow: hidden;background-color:indigo;">
            <a href="map.png" style="padding-left:65%;text-align: right;color: white;font-weight: bold;font-family: Arial, Helvetica, sans-serif;background-color: inherit;float: left;border: none;outline: none;cursor: pointer;padding-top: 14px;padding-bottom:  16px;transition: 0.3s;text-decoration: none;">Home</a>
            <a href="map.png"  style="text-align: right;color: white;font-weight: bold;font-family: Arial, Helvetica, sans-serif;background-color: inherit;float: left;border: none;outline: none;cursor: pointer;padding: 14px 16px;transition: 0.3s;text-decoration: none;">About</a>
            <a href="map.png" style="text-align: right;color: white;font-weight: bold;font-family: Arial, Helvetica, sans-serif;background-color: inherit;float: left;border: none;outline: none;cursor: pointer;padding: 14px 16px;transition: 0.3s;text-decoration: none;">Itinerary</a>
            <a href="map.png" style="text-align: right;color: white;font-weight: bold;font-family: Arial, Helvetica, sans-serif;background-color: inherit;float: left;border: none;outline: none;cursor: pointer;padding: 14px 16px;transition: 0.3s;text-decoration: none;">Committes</a>
            <a href="map.png" style="text-align: right;color: white;font-weight: bold;font-family: Arial, Helvetica, sans-serif;background-color: inherit;float: left;border: none;outline: none;cursor: pointer;padding: 14px 16px;transition: 0.3s;text-decoration: none;">Profile</a>
            
          </div>
          
          
        <h1 style="color:white;font-family:Arial, Helvetica, sans-serif;text-align: center">ABOUT</h1>
        <p style="text-align:left;color:orange;padding-left:10%;font-weight: bold;font-family: Arial, Helvetica, sans-serif">About us</p>
        <p style="color:white;padding-left: 10%">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt<br/> voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
        <p style="text-align:right;color:orange;padding-right:10%;font-weight: bold;font-family: Arial, Helvetica, sans-serif">Venue</p>
        <p style="color:white;padding-right: 10%;text-align:right">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Amet necessitatibus non porro alias, eius doloremque eveniet id deserunt <br/>voluptate cumque perspiciatis earum eos obcaecati tempore debitis expedita velit fugiat. Delectus?</p>
        <br/>
        <img src="map.png" align="right" style="padding-right:3cm;"/>
        
        </div>


    );
}

export default About;