import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Contexts/ThemeContext';

const SignUp = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Add your signup logic here
    console.log('Signing up with:', formData);
    setSuccessMessage('Account created successfully!');
    setErrorMessage('');
  };

  // Container styling for full screen background.
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
    ? "text-blue-400 hover:text-blue-300"
    : "text-blue-600 hover:text-blue-500";

  // Message styling.
  const errorMsgClass = isDarkMode
    ? "text-red-400 text-center"
    : "text-red-600 text-center";
    
  const successMsgClass = isDarkMode
    ? "text-green-400 text-center"
    : "text-green-600 text-center";

  // Button styling remains similar for both themes.
  const buttonClass = "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700";

  return (
    <div className={containerClass}>
      <div className={formContainerClass}>
        <div>
          <h2 className={headingClass}>
            Create a new account
          </h2>
        </div>

        {errorMessage && (
          <div className={errorMsgClass}>{errorMessage}</div>
        )}

        {successMessage && (
          <div className={successMsgClass}>{successMessage}</div>
        )}

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
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClass}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                required
                className={inputClass}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className={labelClass}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className={inputClass}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" className={buttonClass}>
            Create Account
          </button>

          <div className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/signin" className={linkClass}>
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
