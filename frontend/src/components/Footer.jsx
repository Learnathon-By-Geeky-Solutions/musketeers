const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-semibold">MediBook</h3>
                        <p className="mt-4">Transforming healthcare through digital innovation</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Services</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Appointments</a></li>
                            <li><a href="#" className="hover:text-white">EHR Management</a></li>
                            <li><a href="#" className="hover:text-white">Telemedicine</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Company</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Legal</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; 2023 MediBook. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer