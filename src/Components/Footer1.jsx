import React from "react";
import { FaLinkedin, FaWhatsapp, FaGoogle } from "react-icons/fa";
import logo from "../images/logocttpl.png";

const Footer1 = () => {
  const importantLinks = [
    { name: "About Us", href: "#" },
    { name: "Employee Portal", href: "#" },
    { name: "Safety & Tech", href: "#" },
    { name: "Car Leasing", href: "#" },
    { name: "News & Blogs", href: "#" },
    { name: "School Fleet", href: "#" },
    { name: "Dedicated Fleet", href: "#" },
    { name: "Electric Fleet", href: "#" },
  ];

  return (
    <footer className="bg-[#0d2c3b] text-gray-300">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Company Info & Logo */}
          <div>
            <img src={logo} alt="CTTPL Logo" className="w-40 md:w-48" />
            <p className="mt-4 text-sm leading-relaxed">
              Choudhary Tours & Travels Pvt. Ltd. (CTTPL) is nation's best and
              leading, affordable, tech-enabled, and safest mobility partner,
              ensuring seamless journeys with cutting-edge solutions.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-bold text-yellow-500">
              Important Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow, Share & Subscribe */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500">
              Follow, Share & Subscribe
            </h3>
            <p className="mt-4 text-sm">
              Don't miss out on any of the future updates at CTTPL. Follow,
              share, subscribe today and stay tuned.
            </p>
            <div className="mt-6 flex space-x-5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaWhatsapp size={26} />
              </a>
              <a
                href="#"
                aria-label="Google"
                className="text-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaGoogle size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CTTPL - All Rights Reserved
          </p>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
