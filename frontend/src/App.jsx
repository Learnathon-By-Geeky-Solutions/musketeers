import { useState, useEffect } from 'react';;
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DoctorSearch from './components/DoctorSearch';
import Services from './components/Services';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
	const [isDark, setIsDark] = useState(false);
	const [searchQuery, setSearchQuery] = useState({ name: '', specialty: '' });

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark);
	}, [isDark]);

	const handleSearch = (e) => {
		e.preventDefault();
		// Add search logic here
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<Header isDark={isDark} setIsDark={setIsDark} />
			<main>
				<HeroSection />
				<DoctorSearch handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				<Services />
				<Stats />
			</main>
			<Footer />
		</div>
	);
}