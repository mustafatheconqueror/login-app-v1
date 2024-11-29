import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SkeletonLoader from "./SkeletonLoader"; // SkeletonLoader bileşeni import edildi
import { clearToken } from "../slices/authSlice";
import { FaTachometerAlt, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";

const AdminPanel = () => {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // Yükleme durumu

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
            } catch (err) {
                console.error("Veri alınamadı:", err);
            } finally {
                setLoading(false); // Yükleme durumu tamamlandı
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    const handleLogout = () => {
        dispatch(clearToken()); // Redux'ta token'ı temizle
        navigate("/"); // Giriş sayfasına yönlendir
    };

    if (!token) {
        return <p className="text-center text-red-500 mt-4">Erişim yetkiniz yok. Lütfen giriş yapın.</p>;
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 text-gray-800 flex flex-col shadow-md">
                <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-200">
                    Admin Panel
                </h1>
                <nav className="flex-1 p-4">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/home/dashboard"
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 px-4 py-3 rounded-lg ${
                                        isActive ? "bg-gray-300" : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                <FaTachometerAlt size={20} />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/users"
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 px-4 py-3 rounded-lg ${
                                        isActive ? "bg-gray-300" : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                <FaUser size={20} />
                                <span>Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/settings"
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 px-4 py-3 rounded-lg ${
                                        isActive ? "bg-gray-300" : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                <FaCog size={20} />
                                <span>Settings</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <footer className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-4 w-full text-left px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-400 transition-colors"
                    >
                        <FaSignOutAlt size={20} />
                        <span>Logout</span>
                    </button>
                </footer>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-50 p-8">
                <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
                {loading ? (
                    <SkeletonLoader /> // Yükleme sırasında Skeleton Loader göster
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Kullanıcı Bilgileri</h2>
                        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(userData, null, 2)}</pre>
                    </div>
                )}
                <Outlet /> {/* Diğer dinamik içerikler */}
            </main>
        </div>
    );
};

export default AdminPanel;
