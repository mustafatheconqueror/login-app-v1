import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const handleRedirectToLogin = () => {
        navigate("/");
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Kayıt Ol</h1>
                <form>
                    {/* First Name Input */}
                    <div className="mb-4">
                        <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">
                            Ad
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="Adınızı girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Last Name Input */}
                    <div className="mb-4">
                        <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mb-2">
                            Soyad
                        </label>
                        <input
                            type="text"
                            id="last-name"
                            placeholder="Soyadınızı girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                            Telefon Numarası
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Telefon numaranızı girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            E-posta
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-posta adresinizi girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Şifre
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Şifrenizi girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">
                            Şifre Tekrarı
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Şifrenizi tekrar girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Signup Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Kayıt Ol
                        </button>
                    </div>
                </form>

                {/* Login Link */}
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Zaten hesabınız var mı?{" "}
                        <button
                            onClick={handleRedirectToLogin}
                            className="text-blue-500 font-bold hover:underline"
                        >
                            Giriş Yap
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
