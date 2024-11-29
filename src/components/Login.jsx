import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md"; // İkonları içe aktar

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Şifre görünürlük kontrolü

    const handleLogin = (e) => {
        e.preventDefault();
        // Login doğrulama simülasyonu
        if (email === "mustafa@gmail.com" && password === "575757") {
            navigate("/home");
        } else {
            alert("Hatalı giriş bilgileri");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Şifre görünürlük durumu değişir
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Giriş Yap</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            E-posta
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
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"} // Şifre veya düz metin
                                id="password"
                                placeholder="Şifrenizi girin"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                            >
                                {showPassword ? (
                                    <MdVisibilityOff size={24} />
                                ) : (
                                    <MdVisibility size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Giriş Yap
                        </button>
                    </div>
                </form>

                {/* Signup Link */}
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Hesabınız yok mu?{" "}
                        <button
                            onClick={() => navigate("/signup")}
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
