// Dropdown.jsx
import React, { useState } from 'react';

const DropdownMenu = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option)  => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div className="relative inline-block mt-px">
            <div>
                <button type="button" onClick={toggleDropdown} className="rounded-bl-full bg-[#c6345d] w-fit px-10 text-center h-10 text-white font-bold text-xl">
                    {selectedOption ? selectedOption.value : 'Select'}
                </button>
            </div>
            {isOpen && (
                <div className="absolute right-0 text-sm focus:outline-none">
                    <div className="py-1">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="block p-2 text-gray-700 hover:bg-[#c6345d] hover:text-white w-full rounded-md"
                            >
                                {option.value}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
