// components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // use NavLink instead of Link
import Quote from "./Button/GetQuote";
import logo from "../images/logocttpl.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((s) => !s);

  const linkClasses = ({ isActive }) =>
    `hover:text-blue-950 transition duration-200 ${
      isActive ? "text-[#e42313] font-bold  underline-offset-4" : ""
    }`;

  return (
    <nav
      role="navigation"
      className="bg-white text-black p-4 shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="CTT Logo" className="h-10 md:h-14" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm mr-6">
          <NavLink to="/" className={linkClasses}>
            HOME
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            ABOUT US
          </NavLink>
          <NavLink to="/overview" className={linkClasses}>
            FLEET OVERVIEW
          </NavLink>
          <NavLink to="/services" className={linkClasses}>
            OUR SERVICES
          </NavLink>
          <NavLink to="/safety" className={linkClasses}>
            SAFETY & TECH
          </NavLink>
          <NavLink to="/careers" className={linkClasses}>
            CAREERS
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            CONTACT US
          </NavLink>
          <Quote />
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-white shadow-md rounded-md mx-4 p-4 flex flex-col gap-3 items-center">
          <NavLink to="/" onClick={toggleMenu} className={linkClasses}>
            HOME
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={linkClasses}>
            ABOUT US
          </NavLink>
          <NavLink to="/overview" onClick={toggleMenu} className={linkClasses}>
            FLEET OVERVIEW
          </NavLink>
          <NavLink to="/services" onClick={toggleMenu} className={linkClasses}>
            OUR SERVICES
          </NavLink>
          <NavLink to="/safety" onClick={toggleMenu} className={linkClasses}>
            SAFETY & TECH
          </NavLink>
          <NavLink to="/careers" onClick={toggleMenu} className={linkClasses}>
            CAREERS
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={linkClasses}>
            CONTACT US
          </NavLink>
          <Quote/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
