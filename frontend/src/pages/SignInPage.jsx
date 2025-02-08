import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Contexts/ThemeContext';

const SignInPage = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign in logic here
    console.log('SigninPageg in with:', formData);
  };

  // Container background for the full screen.
  const containerClass = isDarkMode
    ? "min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    : "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8";

  // Form container styling.
  const formContainerClass = isDarkMode
    ? "max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-sm"
    : "max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm";

  // Heading styling.
  const headingClass = isDarkMode
    ? "mt-6 text-center text-3xl font-bold text-white"
    : "mt-6 text-center text-3xl font-bold text-gray-900";

  // Label styling.
  const labelClass = isDarkMode
    ? "block text-sm font-medium text-gray-300"
    : "block text-sm font-medium text-gray-700";

  // Input styling.
  const inputClass = isDarkMode
    ? "mt-1 p-2 w-full border rounded-md bg-gray-700 border-gray-600 text-white outline-none"
    : "mt-1 p-2 w-full border rounded-md bg-white border-gray-300 text-gray-900 outline-none";

  // Link styling.
  const linkClass = isDarkMode
    ? "font-medium text-blue-400 hover:text-blue-300"
    : "font-medium text-blue-600 hover:text-blue-500";

  // Text styling for bottom text.
  const bottomTextClass = isDarkMode
    ? "text-center text-sm text-gray-300"
    : "text-center text-sm text-gray-600";

  // Button styling (kept similar for both themes in this example).
  const buttonClass = "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700";

  return (
    <div className={containerClass}>
      <div className={formContainerClass}>
        <div>
          <h2 className={headingClass}>
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="username" className={labelClass}>
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className={inputClass}
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={inputClass}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className={linkClass}>
                Forgot password?
              </Link>
            </div>
          </div>

          <button type="submit" className={buttonClass}>
            Sign in
          </button>

          <div className={bottomTextClass}>
            Don't have an account?{' '}
            <Link to="/signup" className={linkClass}>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
