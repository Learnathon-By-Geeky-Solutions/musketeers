import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
    const { isDarkMode, setIsDarkMode } = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} fixed w-full z-50 shadow-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Bars3BottomLeftIcon className="md:hidden w-6 cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    {isSidebarOpen && (
                        <div
                            role="button"
                            tabIndex={0}
                            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setIsSidebarOpen(false);
                                }
                            }}
                        ></div>
                    )}
                    {/* Sidebar component */}
                    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                    <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        PulsePoint
                    </h1>
                    <div className="hidden md:flex space-x-6">
                        <Link to='/' className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                            Home
                        </Link>
                        <Link to='#' className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                            Services
                        </Link>
                        <Link to='#' className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                            Contact
                        </Link>
                        <Link to='#' className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                            Help
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link
                            to='signin'
                            className={`hidden md:block px-4 py-2 rounded-lg ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                        >
                            Sign In
                        </Link>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {isDarkMode ? (
                                <SunIcon className="h-6 w-6 text-yellow-400" />
                            ) : (
                                <MoonIcon className="h-6 w-6 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
