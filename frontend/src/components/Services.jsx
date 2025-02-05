import { useTheme } from "../Contexts/ThemeContext";

const Services = () => {
  const { isDarkMode } = useTheme();

  // Conditional classes for the container and inner elements
  const containerClass = isDarkMode
    ? "bg-gray-900 py-16"
    : "bg-white py-16";

  const innerContainerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  const headerTitleClass = isDarkMode
    ? "text-3xl font-bold text-white"
    : "text-3xl font-bold text-gray-900";

  const headerTextClass = isDarkMode
    ? "mt-4 text-gray-300 max-w-2xl mx-auto"
    : "mt-4 text-gray-600 max-w-2xl mx-auto";

  const cardClass = isDarkMode
    ? "bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    : "bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow";

  const cardTitleClass = isDarkMode
    ? "text-xl font-semibold text-white"
    : "text-xl font-semibold text-gray-900";

  const cardDescClass = isDarkMode
    ? "mt-2 text-gray-300"
    : "mt-2 text-gray-600";

  const services = [
    { title: 'Appointment Booking', description: '24/7 online booking with instant confirmation' },
    { title: 'EHR Management', description: 'Secure digital health records accessible anywhere' },
    { title: 'Digital Prescriptions', description: 'Paperless prescriptions with smart templates' },
    { title: 'Health Analytics', description: 'Detailed health reports and trend analysis' },
    { title: 'Telemedicine', description: 'Virtual consultations with specialists' },
    { title: 'Medication Tracker', description: 'Automated reminders and dosage tracking' },
  ];

  return (
    <div className={containerClass}>
      <div className={innerContainerClass}>
        <div className="text-center">
          <h2 className={headerTitleClass}>Our Services</h2>
          <p className={headerTextClass}>
            Comprehensive healthcare solutions designed for modern needs
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className={cardClass}>
              <h3 className={cardTitleClass}>{service.title}</h3>
              <p className={cardDescClass}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
