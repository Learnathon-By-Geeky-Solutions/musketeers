import { PlayIcon } from '@heroicons/react/24/solid';
import BannerImg from './../assets/Medicine-bro.svg';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Modern Healthcare Management
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Connect with healthcare professionals instantly and manage your medical
            records securely through our digital platform.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800">
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

export default HeroSection