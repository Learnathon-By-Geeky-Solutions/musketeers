const Stats = () => {
    return (
        <div className="bg-blue-600 dark:bg-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="text-4xl font-bold">98%</div>
                        <div className="mt-2">Customer Satisfaction</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold">50K+</div>
                        <div className="mt-2">Patients Recovered</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold">200%</div>
                        <div className="mt-2">Company Growth</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats