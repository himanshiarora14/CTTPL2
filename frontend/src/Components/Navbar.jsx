// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logocttpl.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((s) => !s);

  return (
    <nav
      role="navigation"
      className="bg-white text-black p-4 shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="CTT Logo" className="h-10 md:h-14" />
          </Link>
        </div>

        {/* Desktop Menu (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6 text-sm mr-6">
          <Link to="/" className="hover:text-blue-950">
            HOME
          </Link>
          <Link to="/about" className="hover:text-blue-950">
            ABOUT US
          </Link>
          <Link to="/overview" className="hover:text-blue-950">
            FLEET OVERVIEW
          </Link>
          <Link to="/services" className="hover:text-blue-950">
            OUR SERVICES
          </Link>
          <Link to="/safety" className="hover:text-blue-950">
            SAFETY & TECH
          </Link>
          <Link to="/careers" className="hover:text-blue-950">
            CAREERS
          </Link>
          <Link to="/contact" className="hover:text-blue-950">
            CONTACT US
          </Link>
          <Link
            to="/quote"
            className="bg-[#e42313] hover:bg-[#c21e11] text-white py-2 px-5 rounded-md font-bold transition duration-200"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e42313]"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-blue-950" />
            ) : (
              <FaBars className="w-6 h-6 text-blue-950" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (slide down) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-white shadow-md rounded-md mx-4 p-4 flex flex-col gap-3 items-center">
          <Link
            to="/"
            onClick={toggleMenu}
            className="w-full text-center py-2 hover:text-gray-700"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="w-full text-center py-2 hover:text-gray-700"
          >
            ABOUT US
          </Link>
          <Link
            to="/overview"
            onClick={toggleMenu}
            className="w-full text-center py-2 hover:text-gray-700"
          >
            FLEET OVERVIEW
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="w-full text-center py-2 hover:text-gray-700"
          >
            OUR SERVICES
          </Link>
          <Link
            to="/safety"
            onClick={toggleMenu}
            className="w-full text-center py-2 hover:text-gray-700"
          >
            SAFETY & TECH
          </Link>
          <Link
            to="/careers"
            onClick={toggleMenu}
            className="w-full text-center py-2 hover:text-gray-700"
          >
            CAREERS
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="w-full text-center py-2 hover:text-gray-700"
          >
            CONTACT US
          </Link>

          <Link
            to="/quote"
            onClick={toggleMenu}
            className="w-full text-center bg-[#e42313] hover:bg-[#c21e11] text-white py-2 rounded-md font-bold transition duration-200"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
