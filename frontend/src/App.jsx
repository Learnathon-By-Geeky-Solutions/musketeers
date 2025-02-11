import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useTheme } from './Contexts/ThemeContext';

export default function App() {
  const { isDarkMode } = useTheme();

  const containerClass = isDarkMode
    ? "min-h-screen bg-gray-900 transition-colors duration-300"
    : "min-h-screen bg-gray-50 transition-colors duration-300";

  return (
    <div className={containerClass}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
