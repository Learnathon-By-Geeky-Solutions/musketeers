const DoctorSearch = ({handleSearch, searchQuery, setSearchQuery}) => {
    return (
        <div className="bg-white dark:bg-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Find Your Doctor</h2>
                    <form onSubmit={handleSearch} className="mt-8 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Doctor's Name"
                                className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                value={searchQuery.name}
                                onChange={(e) => setSearchQuery({ ...searchQuery, name: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Specialty"
                                className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                                value={searchQuery.specialty}
                                onChange={(e) => setSearchQuery({ ...searchQuery, specialty: e.target.value })}
                            />
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
    )
}

export default DoctorSearch