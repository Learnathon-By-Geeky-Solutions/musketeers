import { Link } from "react-router-dom";
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon, HomeIcon, PhoneIcon, QuestionMarkCircleIcon, WrenchScrewdriverIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../Contexts/ThemeContext";
import { useAuth } from "../Contexts/AuthContext";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const { isDarkMode } = useTheme();
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    return (
        <div
            className={`fixed top-0 left-0 w-64 h-full z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
        >
            <div className="flex justify-between items-center p-4 border-b-[1px] border-gray-300">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </div>
            <div className="p-4 h-full">
                <Link to='/' onClick={() => setIsSidebarOpen(false)} className="flex gap-3 my-2">
                    <HomeIcon className="w-6" />
                    <p className={`pt-[3px] ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                        Home
                    </p>
                </Link>
                <Link to='#' onClick={() => setIsSidebarOpen(false)} className="flex gap-3 my-2">
                    <WrenchScrewdriverIcon className="w-6" />
                    <p className={`pt-[3px] ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                        Services
                    </p>
                </Link>
                <Link to='#' onClick={() => setIsSidebarOpen(false)} className="flex gap-3 my-2">
                    <PhoneIcon className="w-6" />
                    <p className={`pt-[3px] ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                        Contact
                    </p>
                </Link>
                <Link to='#' onClick={() => setIsSidebarOpen(false)} className="flex gap-3 my-2">
                    <QuestionMarkCircleIcon className="w-6" />
                    <p className={`pt-[3px] ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                        Help
                    </p>
                </Link>
                {isAuthenticated ?
                    <Link to='' onClick={() => setIsAuthenticated(false)} className="flex gap-3 my-2 absolute bottom-3">
                        <ArrowRightStartOnRectangleIcon className="w-6" />
                        <p className={`pt-[3px] ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                            Log out
                        </p>
                    </Link> :
                    <Link to='signin' onClick={() => setIsSidebarOpen(false)} className="flex gap-3 my-2 absolute bottom-3 w-55">
                        <ArrowRightEndOnRectangleIcon className="w-6" />
                        <p className={`pt-[3px] ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
                            Log In
                        </p>
                    </Link>}
            </div>
        </div>
    );
};

export default Sidebar;
