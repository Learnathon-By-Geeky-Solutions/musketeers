import React, { useState, useEffect } from 'react';
import { useTheme } from '../Contexts/ThemeContext';
import DoctorCard from '../components/DoctorCard';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import FilterSection from '../components/FilterSection';
import { DOCTOR_SEARCH_PAGE_BANNER } from '../assets/images';

const DoctorsListPage = () => {
	const { isDarkMode } = useTheme();
	const [showFilter, setShowFilter] = useState(false);
	const [filters, setFilters] = useState({
		location: '',
		specialty: '',
		minFee: '',
		maxFee: '',
	});

	const accordionItems = [
		{ id: 1, title: "Select Disrict", content: "This is the content of the first option." },
		{ id: 2, title: "Choose a Specialty", content: "This is the content of the second option." },
		{ id: 3, title: "Price Range", content: "This is the content of the third option." },
	];

	const doctors = [
		{
			id: 1,
			name: "Dr. John Doe",
			photo: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
			specialty: "Cardiology",
			location: "Dhaka",
			timeOfVisit: "9:00 AM - 5:00 PM",
			fee: 100,
			rating: 4.5,
		},
		{
			id: 2,
			name: "Dr. Jane Smith",
			photo: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
			specialty: "Neurology",
			location: "Chittagong",
			timeOfVisit: "10:00 AM - 6:00 PM",
			fee: 120,
			rating: 4.7,
		},
		{
			id: 3,
			name: "Dr. Robert Brown",
			photo: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
			specialty: "Dermatology",
			location: "Khulna",
			timeOfVisit: "8:00 AM - 4:00 PM",
			fee: 80,
			rating: 4.3,
		},

	];

	// Filter doctors based on selected filters.
	const filteredDoctors = doctors.filter((doc) => {
		const matchesLocation = filters.location ? doc.location === filters.location : true;
		const matchesSpecialty = filters.specialty ? doc.specialty === filters.specialty : true;
		const matchesMinFee = filters.minFee ? doc.fee >= Number(filters.minFee) : true;
		const matchesMaxFee = filters.maxFee ? doc.fee <= Number(filters.maxFee) : true;
		return matchesLocation && matchesSpecialty && matchesMinFee && matchesMaxFee;
	});

	// Prevent scrolling when the filter is open
	useEffect(() => {
		if (showFilter) {
			document.body.style.overflow = 'hidden'; // Disable scroll
		} else {
			document.body.style.overflow = ''; // Re-enable scroll
		}
		return () => {
			document.body.style.overflow = ''; // Cleanup in case of unmount
		};
	}, [showFilter]);

	const pageContainerClass = isDarkMode ? "bg-gray-900 text-white min-h-screen" : "text-gray-900 min-h-screen";

	return (
		<>
			<div className='h-[430px] w-full'>
				<div
					className='h-full bg-cover bg-center'
					style={{
						backgroundImage: `url(${DOCTOR_SEARCH_PAGE_BANNER})`
					}}
				>
					<div className='w-full flex flex-col justify-center items-center gap-4 text-white h-full'>
					</div>
				</div>
			</div>
			<div className={`${pageContainerClass} py-8 pt-24 relative`}>
				<div className="max-w-7xl mx-auto px-4 flex justify-center gap-4">
					{showFilter && (
						<div
							className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
							onClick={() => setShowFilter(false)}
						></div>
					)}
					{/* FilterSection */}
					<FilterSection showFilter={showFilter} setShowFilter={setShowFilter} items={accordionItems} />
					<div className=''>
						<div className="flex justify-between items-center mb-4">
							<h1 className="text-3xl font-bold">Doctors List</h1>
							<button
								className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
								onClick={() => setShowFilter(true)}
							>
								<AdjustmentsHorizontalIcon className='w-6' />
							</button>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
							{filteredDoctors.map((doctor) => (
								<DoctorCard key={doctor.id} doctor={doctor} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorsListPage;
