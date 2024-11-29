import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/home"); // Ana sayfaya yönlendirme
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-gray-600 text-lg mt-4">Aradığınız sayfa bulunamadı.</p>
                <button
                    onClick={handleGoHome}
                    className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Ana Sayfaya Dön
                </button>
            </div>
        </div>
    );
};

export default NotFound;
