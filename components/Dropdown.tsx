import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
    title: string;
}

const items = ["Item 1", "Item 2", "Item 3"];

const Dropdown: React.FC<DropdownProps> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative flex items-center align-middle text-left text-black text-[16px] gap-[2px] sm:gap-[8px]" ref={dropdownRef}>
            {title}
            <div className="relative">
                <button
                    type="button"
                    className="inline-flex justify-center w-full text-sm"
                    onClick={toggleDropdown}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {items.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;