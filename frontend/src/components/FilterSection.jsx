import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Contexts/ThemeContext";
import { ChevronUpIcon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from 'prop-types';
import AccordionContent from "./AccordionContent";

const FilterSection = ({ showFilter, setShowFilter, items }) => {
    const { isDarkMode } = useTheme();
    const [openItems, setOpenItems] = useState(items.map((_, idx) => idx)); // All items open by default
    const contentRefs = useRef([]); // To store references to accordion content divs
    const [showMore, setShowMore] = useState(false);

    // Toggle function to open/close accordion items
    const toggleItem = (index) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter((item) => item !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    };

    // Recalculate height when showMore is toggled
    useEffect(() => {
        // Force a re-render to recalculate heights when showMore changes
        contentRefs.current.forEach((ref, index) => {
            if (ref && openItems.includes(index)) {
                ref.style.maxHeight = `${ref.scrollHeight}px`;
            }
        });
    }, [showMore, openItems]);

    // Conditional classes based on the theme (light or dark)
    const headerClass = isDarkMode
        ? "flex justify-between w-full text-left py-1 dark:text-white"
        : "flex justify-between w-full text-left py-1 text-gray-900";

    const contentClass = isDarkMode
        ? "accordion-content dark:text-gray-300"
        : "accordion-content text-gray-700";

    const containerClass = isDarkMode
        ? "accordion-container space-y-4 border-gray-600"
        : "accordion-container space-y-4 border-gray-300";

    return (
        <div className={`fixed md:static md:rounded-lg top-16 right-0 w-60 h-full md:max-h-screen z-40 transform transition-transform duration-300 ease-in-out ${showFilter ? "translate-x-0" : "translate-x-full"} md:translate-x-0 overflow-auto ${isDarkMode ? "bg-gray-800 p-4" : "bg-white p-4 shadow"}`}>
            <div className="flex justify-between items-center mb-4">
                <button
                    className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => setShowFilter(false)}
                >
                    <XMarkIcon className='h-5' />
                </button>
                <h2 className="text-xl font-semibold">Filter Doctors</h2>
            </div>
            <div className={containerClass}>
                {items.map((item, index) => (
                    <div key={item.id} className="accordion-item">
                        {/* Accordion header */}
                        <button
                            onClick={() => toggleItem(index)}
                            className={headerClass}
                        >
                            <h2 className="font-semibold text-lg">{item.title}</h2>
                            {openItems.includes(index) ? (
                                <ChevronUpIcon className="w-5 h-5 text-gray-400" />
                            ) : (
                                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                            )}
                        </button>
                        {/* Accordion content */}
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            style={{
                                maxHeight: openItems.includes(index) && contentRefs.current[index] ? `${contentRefs.current[index].scrollHeight}px` : "0px",
                                transition: "max-height 0.3s ease",
                                overflow: "hidden",
                            }}
                            className={contentClass}
                        >
                            <AccordionContent item={item} showMore={showMore} setShowMore={setShowMore}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterSection;

FilterSection.propTypes = {
    showFilter: PropTypes.bool.isRequired,
    setShowFilter: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};