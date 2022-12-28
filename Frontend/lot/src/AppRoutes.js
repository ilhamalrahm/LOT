import React from "react";
import { Navigate, Route } from "react-router-dom";
 
import { useTheState } from "./Context";
import SignUpPage from "./Pages/SignUpPage";
 
// renders the components according to the routes
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useTheState();
    console.log("Reaching here")
    var Elem;
    if(isPrivate && !Boolean(userDetails.token)  )
    {
        Elem=SignUpPage;
    }
    else{
        Elem=Component
    }
    
    return (
        <Route path="/signUp" element={<SignUpPage/>}/>
    )
}
 
export default AppRoutes;