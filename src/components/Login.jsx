import React from "react";

const Login = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Giriş Yap</h1>
                <form>
                    {/* E-mail Input */}
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

                    {/* Login Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Giriş Yap
                        </button>
                    </div>

                    {/* Signup Link */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Hesabınız yok mu?{" "}
                            <a href="#" className="text-blue-500 font-bold hover:underline">
                                Kayıt Ol
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
