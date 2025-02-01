import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

const Header = ({ isDark, setIsDark }) => {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">MediBook</h1>
                    <div className="hidden md:flex space-x-6">
                        <Link to='' className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Services</a>
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Help</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to='signup' className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Sign Up
                        </Link>
                        <Link to='signin' className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                            Sign In
                        </Link>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                            {isDark ? (
                                <SunIcon className="h-6 w-6 text-yellow-400" />
                            ) : (
                                <MoonIcon className="h-6 w-6 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header