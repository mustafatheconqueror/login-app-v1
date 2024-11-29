import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import AdminPanel from "../components/AdminPanel";
import NotFound from "../components/NotFound";
import PrivateRoute from "./PrivateRoute"; // PrivateRoute eklendi

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Login Sayfası */}
                <Route path="/" element={<Login />} />

                {/* Admin Panel (Korunan Route) */}
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <AdminPanel />
                        </PrivateRoute>
                    }
                />

                {/* 404 Sayfası */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
