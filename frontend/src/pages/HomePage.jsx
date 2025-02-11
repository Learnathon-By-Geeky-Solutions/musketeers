import HeroSection from '../components/HeroSection';
import DoctorSearch from '../components/DoctorSearch';
import Services from '../components/Services';
import Stats from '../components/Stats';
import { useState } from 'react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState({ name: '', specialty: '' });
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
    <main>
      <HeroSection />
      <DoctorSearch handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Services />
      <Stats />
    </main>
  )
}

export default HomePage