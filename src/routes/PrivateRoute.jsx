import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Redux'tan auth durumu alınıyor

    return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
