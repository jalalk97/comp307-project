import  IsAuthenticated from './IsAuthenticated';
import { Navigate } from "react-router-dom";
import React from 'react';
//tobe completed
const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/Login" />; //incase user is already logged out, if token does not exist redirects to login page
}

export default ProtectedRoute;