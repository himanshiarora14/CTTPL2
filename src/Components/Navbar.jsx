// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logocttpl.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="CTT Logo" className="h-12 md:h-16" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 mr-4 items-center">
          <Link to="/" className="hover:text-blue-950">
            HOME
          </Link>
          <Link to="/about" className="hover:text-blue-950">
            ABOUT US
          </Link>
          <Link to="/services" className="hover:text-blue-950">
            OUR SERVICES
          </Link>
          <Link to="/safety" className="hover:text-blue-950">
            SAFETY & TECH
          </Link>
          <Link to="/contact" className="hover:text-blue-950">
            CONTACT US
          </Link>
          <a
            href="#"
            className="bg-[#e42313] hover:bg-[#c21e11] shadow-[#c21e11] shadow-2xs text-white py-2 px-6 rounded-md font-bold transition duration-300"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars className="w-8 h-8 text-blue-950" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 items-center">
            <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
              HOME
            </Link>
            <Link to="/about" className="hover:text-gray-400" onClick={toggleMenu}>
              ABOUT US
            </Link>
            <Link to="/services" className="hover:text-gray-400" onClick={toggleMenu}>
              OUR SERVICES
            </Link>
            <Link to="/safety" className="hover:text-gray-400" onClick={toggleMenu}>
              SAFETY & TECH
            </Link>
            <Link to="/contact" className="hover:text-gray-400" onClick={toggleMenu}>
              CONTACT US
            </Link>
            <a
              href="#"
              className="bg-[#e42313] hover:bg-[#c21e11] text-white py-2 px-6 rounded-md font-bold transition duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
