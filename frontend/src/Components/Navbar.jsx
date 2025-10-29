import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Quote from "./Button/GetQuote";
import logo from "../images/logocttpl.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const services = [
  { to: "/employee-transport-service", label: "Employee Transport Services" },
  { to: "/car-leasing", label: "Car Leasing Services" },
  { to: "/dedicated-fleet-service", label: "Dedicated Fleet Services" },
  { to: "/school-fleet", label: "School Fleet Services" },
  { to: "/electric-fleet-service", label: "Electric Fleet Services" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((s) => !s);
  const toggleServices = () => setServicesOpen((s) => !s);

  // NavLink style function
  const linkClasses = ({ isActive }) =>
    `hover:text-blue-950 transition duration-200 ${
      isActive ? "text-[#e42313] font-bold underline-offset-4" : ""
    }`;

  // Detect if current path is a services route (or the generic /services page)
  const isOnServiceRoute = () => {
    const path = location.pathname || "/";
    if (path === "/services") return true;
    return services.some((s) => path === s.to || path.startsWith(s.to + "/"));
  };

  const serviceButtonClass = `flex items-center justify-center gap-2 text-md font-medium px-4 py-2 text-center transition duration-200 hover:text-blue-950 ${
    isOnServiceRoute() ? "text-[#e42313] font-bold underline-offset-4" : ""
  }`;

  return (
    <nav role="navigation" className="bg-white text-black p-4 shadow-md sticky top-0 z-50">
      <div className="container md:mx-auto lg:mx-0 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink
            to="/"
            onClick={() => {
              setIsOpen(false);
              setServicesOpen(false);
              setMobileServicesOpen(false);
            }}
          >
            <img src={logo} alt="CTT Logo" className="h-10 md:h-14" />
          </NavLink>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center space-x-6 text-sm mr-6 relative">
          <NavLink to="/" className={linkClasses}>
            HOME
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            ABOUT US
          </NavLink>
          {/* <NavLink to="/overview" className={linkClasses}>
  FLEET OVERVIEW
</NavLink> */}


          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <div className="flex items-center gap-2">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  // keep NavLink's normal active style OR highlight when any child service is active
                  `${linkClasses({ isActive })} ${isOnServiceRoute() && !isActive ? "text-[#e42313] font-bold underline-offset-4" : ""}`
                }
                onClick={() => {
                  setServicesOpen(false);
                  setIsOpen(false);
                }}
              >
                OUR SERVICES
              </NavLink>

              <button
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleServices();
                }}
                onMouseEnter={() => setServicesOpen(true)}
                className="p-1 rounded focus:outline-none"
                title="Toggle services"
              >
                <FaChevronDown
                  className={`w-3 h-3 text-blue-950 transform transition ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              role="menu"
              className={`absolute left-0 mt-0 min-w-[260px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-150 ${
                servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
              }`}
            >
              <div className="py-3">
                {services.map((s) => (
                  <NavLink
                    key={s.to}
                    to={s.to}
                    className="block px-5 py-3 text-sm font-medium text-[#1f3a5a] hover:bg-gray-50 hover:text-[#e42313] transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

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

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e42313]"
          >
            {isOpen ? <FaTimes className="w-6 h-6 text-blue-950" /> : <FaBars className="w-6 h-6 text-blue-950" />}
          </button>
        </div>
      </div>

      {/* Mobile menu content */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-3" : "max-h-0"}`} aria-hidden={!isOpen}>
        <div className="bg-white shadow-md rounded-md mx-4 p-4 flex flex-col gap-3 items-center">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClasses}>
            HOME
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClasses}>
            ABOUT US
          </NavLink>
          {/* <NavLink to="/overview" onClick={() => setIsOpen(false)} className={linkClasses}>
  FLEET OVERVIEW
</NavLink> */}


          <div className="w-full flex flex-col items-center">
            {/* apply the same "active" look when on a services route */}
            <button
              onClick={() => setMobileServicesOpen((s) => !s)}
              className={serviceButtonClass}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-list"
            >
              OUR SERVICES
              <FaChevronDown className={`w-3 h-3 transform transition ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              id="mobile-services-list"
              className={`${mobileServicesOpen ? "max-h-[500px] mt-2" : "max-h-0"} overflow-hidden transition-all duration-300 w-full`}
            >
              <div className="flex flex-col items-center px-2">
                {services.map((s) => (
                  <NavLink
                    key={s.to}
                    to={s.to}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block w-full px-4 py-3 text-center text-sm font-medium text-[#1f3a5a] hover:bg-gray-50 hover:text-[#e42313] rounded"
                  >
                    {s.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/safety" onClick={() => setIsOpen(false)} className={linkClasses}>
            SAFETY & TECH
          </NavLink>
          <NavLink to="/careers" onClick={() => setIsOpen(false)} className={linkClasses}>
            CAREERS
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClasses}>
            CONTACT US
          </NavLink>
          <Quote />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
