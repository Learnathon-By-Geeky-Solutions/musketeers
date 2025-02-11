import PropTypes from "prop-types";
import { useTheme } from "../Contexts/ThemeContext";
import { specialties, districts } from "./DoctorFilterParams";

const DoctorSearch = ({ handleSearch, searchQuery, setSearchQuery }) => {
  const { isDarkMode } = useTheme();

  // Define conditional classes based on the theme
  const containerClass = isDarkMode
    ? "bg-gray-800 py-16"
    : "bg-gray-100 py-16";
  const headingClass = isDarkMode
    ? "text-3xl font-bold text-white"
    : "text-3xl font-bold text-gray-900";
  const inputClass = isDarkMode
    ? "p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
    : "p-3 border rounded-lg bg-white border-gray-300 text-gray-900";

  return (
    <div className={containerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={headingClass}>Find Your Doctor</h2>
          <form onSubmit={handleSearch} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Doctor's Name Input */}
              <input
                type="text"
                placeholder="Doctor's Name"
                className={inputClass}
                value={searchQuery.name}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, name: e.target.value })
                }
              />

              {/* Specialty Select */}
              <select
                className={inputClass}
                value={searchQuery.specialty}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, specialty: e.target.value })
                }
              >
                <option value="">Select Specialty</option>
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Select */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                className={inputClass}
                value={searchQuery.location}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, location: e.target.value })
                }
              >
                <option value="">Choose Location</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Search Doctors
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

DoctorSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.shape({
    name: PropTypes.string,
    specialty: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default DoctorSearch;
