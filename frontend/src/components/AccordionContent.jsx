import PropTypes from 'prop-types';
import { specialties, districts, priceRanges } from "./DoctorFilterParams";

const AccordionContent = ({ item, showMore, setShowMore }) => {
    if (item.id === 1) {
        return (
            <>
                <div className="my-2">
                    <input type="checkbox" id="all-location" />
                    <label className="ml-3" htmlFor="all-location">All Location</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" id="nearby" />
                    <label className="ml-3" htmlFor="nearby">Nearby</label>
                </div>

                <div className="h-[1px] bg-gray-300" />
                {showMore ? (
                    districts.map((district) => (
                        <div className="my-2" key={district}>
                            <input type="checkbox" />
                            <label className="ml-3">{district}</label>
                        </div>
                    ))
                ) : (
                    districts.slice(0, 5).map((district) => (
                        <div className="my-2" key={district}>
                            <input type="checkbox" />
                            <label className="ml-3">{district}</label>
                        </div>
                    ))
                )}
                {districts.length > 5 && (
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="mt-2 text-blue-500 hover:underline"
                    >
                        {showMore ? "See Less" : "See More"}
                    </button>
                )}
            </>
        );
    } else if (item.id === 2) {
        return (
            <>
                {specialties.map((specialty) => (
                    <div className="my-2" key={specialty}>
                        <input type="checkbox" />
                        <label className="ml-3">{specialty}</label>
                    </div>
                ))}
            </>
        );
    } else {
        return (
            <>
                <div>
                    <input
                        className="bg-gray-100 py-2 px-3 rounded-lg w-full outline-none my-2"
                        placeholder="Minimum Fee"
                    />
                    <input
                        className="bg-gray-100 py-2 px-3 rounded-lg w-full outline-none my-2"
                        placeholder="Maximum Fee"
                    />
                </div>
                {priceRanges.map((price) => (
                    <div className="my-2" key={price}>
                        <input type="checkbox" />
                        <label className="ml-3">{price}</label>
                    </div>
                ))}
            </>
        );
    }
};

AccordionContent.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
    }).isRequired,
    showMore: PropTypes.bool.isRequired,
    setShowMore: PropTypes.func.isRequired,
};

export default AccordionContent;
