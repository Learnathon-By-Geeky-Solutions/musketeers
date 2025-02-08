import { useTheme } from "../Contexts/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  // Define conditional class names based on the current theme.
  const containerClass = isDarkMode
    ? "bg-gray-800 text-gray-300 py-12"
    : "bg-gray-100 text-gray-600 py-12";

  const brandTitleClass = isDarkMode
    ? "text-white text-lg font-semibold"
    : "text-gray-800 text-lg font-semibold";

  const sectionTitleClass = isDarkMode
    ? "text-white font-semibold"
    : "text-gray-800 font-semibold";

  const linkClass = isDarkMode
    ? "hover:text-white"
    : "hover:text-gray-800";

  const borderClass = isDarkMode
    ? "border-gray-700"
    : "border-gray-300";

  return (
    <footer className={containerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className={brandTitleClass}>PulsePoint</h3>
            <p className="mt-4">
              Transforming healthcare through digital innovation
            </p>
          </div>
          <div>
            <h4 className={sectionTitleClass}>Services</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  Appointments
                </a>
              </li>
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  EHR Management
                </a>
              </li>
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  Telemedicine
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={sectionTitleClass}>Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  Careers
                </a>
              </li>
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={sectionTitleClass}>Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://www.oshlil.com/" className={linkClass}>
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`mt-8 pt-8 border-t ${borderClass} text-center`}>
          <p>&copy; 2023 PulsePoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
