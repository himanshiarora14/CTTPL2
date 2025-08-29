// components/Navbar.jsx
import React, { useState } from 'react';
import logo from '../images/logo.png'; 
import { FaBars } from 'react-icons/fa'; // Added this import

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" text-black bg-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="flex-shrink-0">
                    <img src={logo} alt="CTT Logo" className="h-12 md:h-16" />
                </div>

                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#" className="hover:text-blue-950">HOME</a>
                    <a href="#" className="hover:text-blue-950">ABOUT US</a>
                    <a href="#" className="hover:text-blue-950">OUR SERVICES</a>
                    <a href="#" className="hover:text-blue-950">SAFETY & TECH</a>
                    <a href="#" className="hover:text-blue-950">CONTACT US</a>
                    <a href="#" className="bg-[#e42313] hover:bg-[#c21e11] text-white py-2 px-6 rounded-md font-bold transition duration-300">Get Quote</a>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FaBars className="w-8 h-8 text-blue-950" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4">
                    <div className="flex flex-col space-y-4 items-center">
                        <a href="#" className="hover:text-gray-400">HOME</a>
                        <a href="#" className="hover:text-gray-400">ABOUT US</a>
                        <a href="#" className="hover:text-gray-400">OUR SERVICES</a>
                        <a href="#" className="hover:text-gray-400">SAFETY & TECH</a>
                        <a href="#" className="hover:text-gray-400">CONTACT US</a>
                        <a href="#" className="bg-[#e42313] hover:bg-[#c21e11] text-white py-2 px-6 rounded-md font-bold transition duration-300">Get Quote</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;