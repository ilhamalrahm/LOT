import React, { useContext, useState,useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../Components/Navbar';
import { useStateDispatch, useTheState } from '../Context';
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Footer';
import SideBar from '../Components/Sidebar';
import { useMediaQuery } from 'react-responsive';
import Navmob from '../Components/Navmob';

const SignUpPage=()=>{
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

      const checkPassMatch = (formdata) => {
        var flag=true
        if(formdata.password!=formdata.confirm)
        {
            
            setMes("Passwords dont match!")
            flag=false
        }
        else{
            if(formdata.password.length<6)
            {
                setMes("Passwords should be at least 6 characters long!")
                flag =false
            }
        }
        return flag;

    }

    const checkEmptyFields = (formdata) => {
        for (let i in formdata)
        {
            console.log(i + " this is i ")
            console.log(formdata[i]," this is formdata[i]")
            if(i!="fromMahe" && formdata[i]=="")
            {
                console.log("problem: "+i+" "+formdata[i])
                
                setMes('Fields Cannot be Empty!')

                return true;
            }
           
        }

        return false
       

       

    }
      

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

    const [message,setMes]=useState("");

    const HandleSubmit=()=>{
    console.log("submitting")
       setMes("Submitting ...");
       var formdata={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        confirm:document.getElementById('confirm').value,
        name:document.getElementById('name').value,
        college:document.getElementById('college').value,
        fromMahe:document.getElementById('fromMahe').checked,
        committeePref:document.getElementById('committeePref').value,
        countryPref:document.getElementById('countryPref').value,
        phone:document.getElementById('phone').value,
       }
    //    var email=document.getElementById('email').value;
    //    var password=document.getElementById('password').value;
    //    var confirm=document.getElementById('confirm').value;
    //    var name=document.getElementById('name').value;
    //    var college=document.getElementById('college').value;
    //    var fromMahe=document.getElementById('fromMahe').checked;
    //    var committeePref=document.getElementById('committeePref').value;
    //    var countryPref=document.getElementById('countryPref').value;
       

       if (!checkEmptyFields(formdata))
       {
            if(checkPassMatch(formdata)){
                document.getElementById("message").style.color="blue";
                setMes("Submitting ...")
                axios.post("/api/user/signUp",formdata).then(res=>{
                    document.getElementById("message").style.color="red";
                    setMes("")
                    console.log(res.data);
                    navigate("/signin");
                }).catch((err)=>{
                    console.log(err.response);
                    
                    document.getElementById("message").style.color="red";
                    setMes(err.response.data)
                })
                
                   
                  }
                
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

        <div className='position-relative' style={{ margin: 0, padding: 0,backgroundColor: '#1E0B39',height:"100vh",width:"100vw",overflowY:"scroll",overflowX:"hidden" }}>
            <div className="bar">
            {elem}

            </div>
            <SideBar/>
        

        <div className="c position-relative d-flex justify-content-end w-100" >

            <div className='details position-relative' style={{ backgroundColor: '#1E0B39', fontFamily: "Poppins",height:"100%", width:"100%"  }}>
                <h1 className='text-bold' style={{ color: 'white', padding: "1% 14% 0% 14%",fontWeight:"bold" }}>Register</h1>
                <p style={{color:"gray"}} className="welcome">Welcome, please enter your details!</p>
                <div className="details " style={{ color: '#FFB703', textAlign: 'left' }}>
                    <form action="noaction.php">
                        <div className="formgroup1" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            <span style={{ padding: '0% 0% 5% 0%' }}>Name</span> <br></br>
                            <input type="text" id="name" className="name p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup2 position-relative" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%', }}>
                            Email ID <br></br>
                            <input type="email" id="email" className="email p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup3" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            College <br></br>
                            <input type="text" id="college" className="college p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup10" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Phone <br></br>
                            <input type="text" id="phone" className="phone p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup8" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Country Preference <br></br>
                            <input type="text" id="countryPref" placeholder='eg: India,USA,China' className="confirm p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup9" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Committee Preference<br></br>
                            <input type="text" id="committeePref" placeholder='eg: comm1,comm2,comm3' className="confirm p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup4" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Password <br></br>
                            <input type="password" id="password" className="password p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup5" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            Confirm Password <br></br>
                            <input type="password" id="confirm" className="confirm p-2" style={{fontSize:"1rem", width: '100%',borderRadius:"10px"}}/>
                        </div>
                        <div className="formgroup6 d-flex justify-content-center" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            <p className="mahe px-1 m-0">Are you from Mahe?</p>
                            <input className='px-1' type="checkbox" id="fromMahe" name="fromMahe"/>
                        </div>
                        <div className="formgroup7 d-flex justify-content-center" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '1%' }}>
                            
                            <input className="btn btn-primary" onClick={HandleSubmit} type="button" value="Register" style={{backgroundColor:"#11071F"}}/>
                            
                        </div>
                        
                    </form>
                </div>
                <p className="message p-2" id="message" style={{color:"red"}}>{message}</p>
                <p style={{color:"gray"}} className="welcome">Already Registered? Go to <a href="/signin" className="signin">Login Page</a></p>
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

export default SignUpPage;