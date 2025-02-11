import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../Contexts/ThemeContext';
import { CurrencyBangladeshiIcon, StarIcon } from '@heroicons/react/24/outline';

const DoctorCard = ({ doctor }) => {
	const { isDarkMode } = useTheme();

	return (
		<div className={`h-fit max-w-96 p-4 rounded-lg shadow hover:shadow-lg transition ${isDarkMode? 'bg-gray-800': 'bg-white'}`}>
			<div className='flex gap-5'>
				<div className='w-24 h-24'>
					<img src={doctor.photo} alt={doctor.name} className='h-full w-full object-cover rounded-xl' />
				</div>
				<div>
					<h1 className='font-bold text-lg mb-2'>{doctor.name} </h1>
					<p className='rounded-lg border w-fit px-2 border-gray-500 text-gray-700 text-[15px]'>{doctor.specialty} </p>
				</div>
			</div>
			<div className='flex justify-between mt-5'>
				<div className='text-sm'>
					<p className='text-gray-600'>Fee</p>
					<p className="inline-flex items-center mt-1">
						<CurrencyBangladeshiIcon className="w-5 h-5 mr-1" />
						<span className='mt-1'>{doctor.fee}</span>
					</p>
				</div>
				<div className='text-sm'>
					<p className='text-gray-600'>Rating</p>
					<p className="inline-flex items-center mt-1">
						<StarIcon className="w-5 h-5 mr-1" />
						<span className='mt-1'>{doctor.rating}</span>
					</p>
				</div>
				<button className={`px-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700'}`}>Book Appoinment</button>
			</div>
		</div>
	);
};

DoctorCard.propTypes = {
	doctor: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		specialty: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		timeOfVisit: PropTypes.string.isRequired,
		fee: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired,
	}).isRequired,
};

export default DoctorCard;
