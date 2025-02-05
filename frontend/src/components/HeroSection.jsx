import { PlayIcon } from '@heroicons/react/24/solid';
import BannerImg from './../assets/Medicine-bro.svg';
import { useTheme } from "../Contexts/ThemeContext";

const HeroSection = () => {
	const { isDarkMode } = useTheme();

	return (
		<div className={`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
			<div className="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
						Modern Healthcare Management
					</h1>
					<p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
						Connect with healthcare professionals instantly and manage your medical
						records securely through our digital platform.
					</p>
					<div className="mt-8 flex space-x-4">
						<button className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700`}>
							Get Started
						</button>
						<button className={`flex items-center px-6 py-3 border rounded-lg ${isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-gray-800' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
							<PlayIcon className="h-5 w-5 mr-2" />
							Watch Video
						</button>
					</div>
				</div>
				<div className="relative">
					<img
						src={BannerImg}
						alt="Healthcare"
						className="rounded-lg"
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroSection;