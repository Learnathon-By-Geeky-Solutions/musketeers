

const Services = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Comprehensive healthcare solutions designed for modern needs
                    </p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Appointment Booking', description: '24/7 online booking with instant confirmation' },
                        { title: 'EHR Management', description: 'Secure digital health records accessible anywhere' },
                        { title: 'Digital Prescriptions', description: 'Paperless prescriptions with smart templates' },
                        { title: 'Health Analytics', description: 'Detailed health reports and trend analysis' },
                        { title: 'Telemedicine', description: 'Virtual consultations with specialists' },
                        { title: 'Medication Tracker', description: 'Automated reminders and dosage tracking' },
                    ].map((service, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services