import  IsAuthenticated from './IsAuthenticated';
import { Navigate } from "react-router-dom";
import React from 'react';
//tobe completed
const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;