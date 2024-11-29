import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setToken } from "../slices/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Şifre görünürlüğü durumu
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Loading durumu


    const handleRedirectToSignup = () => {
        navigate("/signup");
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Hataları sıfırla
        setLoading(true); // Loading durumunu başlat

        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
                email,
                password,
            });

            const { access_token } = response.data;
            dispatch(setToken(access_token)); // Redux store'da token'ı kaydet
            axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`; // Global Authorization header
            navigate("/home");
        } catch (err) {
            setError(err.response?.data?.message || "Giriş yapılamadı.");
        } finally {
            setLoading(false); // Loading durumunu durdur
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Giriş Yap</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-posta adresinizi girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Şifre
                        </label>
                        <div className="flex items-center border rounded-lg px-4 focus-within:ring focus-within:ring-blue-300">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Şifrenizi girin"
                                className="flex-1 py-2 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                className="cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className={`w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 ${
                                loading
                                    ? "bg-blue-300 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600 text-white"
                            }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    <span className="ml-2">Giriş Yapılıyor...</span>
                                </div>
                            ) : (
                                "Giriş Yap"
                            )}
                        </button>
                    </div>
                </form>
                {/* Login Link */}
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        hesabınız yok mu?{" "}
                        <button
                            onClick={handleRedirectToSignup}
                            className="text-blue-500 font-bold hover:underline"
                        >
                            Kayıt Ol
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
