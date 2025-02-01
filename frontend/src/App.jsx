import { useState, useEffect } from 'react';;
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark);
	}, [isDark]);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<Header isDark={isDark} setIsDark={setIsDark} />
			<Outlet />
			<Footer />
		</div>
	);
}