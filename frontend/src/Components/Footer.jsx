import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGoogle } from 'react-icons/fa';
import logo from "../images/logo2.png";

const Footer = () => {
  const importantLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Employee Portal', href: 'employee-transport-service' },
    { name: 'Safety & Tech', href: '/safety' },
    { name: 'Car Leasing', href: '/car-leasing' },
    { name: 'School Fleet', href: '/school-fleet' },
    { name: 'Dedicated Fleet', href: '/dedicated-fleet-service' },
    { name: 'Electric Fleet', href: '/electric-fleet-service' },
  ];

  return (
    <footer className="bg-[#0A283A] text-gray-300">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Column 1: Company Info & Logo */}
          <div>
            <img src={logo} alt="CTTPL Logo" className="w-48" />
            <p className="mt-4 text-md ">
              Choudhary Tours & Travels Pvt. Ltd. (CTTPL) is nation's best and leading, affordable, tech-enabled, and safest mobility partner, ensuring seamless journeys with cutting-edge solutions.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-bold text-[#FFD166]">Important Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow, Share & Subscribe */}
          <div>
            <h3 className="text-lg font-bold text-[#FFD166]">Follow, Share & Subscribe</h3>
            <p className="mt-4 mr-4 text-sm">
              Don't miss out on any of the future updates at CTTPL. Follow, share, subscribe today and stay tuned.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/company/cttplofficial/" aria-label="LinkedIn" className="text-[#FFD166] hover:text-white transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=918527600262&text=Hello%20There%2C%20%0A%0AI%20have%20visited%20your%20website%20www.choudharytours.in%20%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%20%0AKindly%20share%20your%20company%27s%20profile.%20%0A%0AThank%20You%20" aria-label="WhatsApp" className="text-[#FFD166] hover:text-white transition-colors duration-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://choudharytours.in/" aria-label="Google" className="text-[#FFD166] hover:text-white transition-colors duration-300">
                <FaGoogle size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-6 py-4 flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <p className="text-sm">
            &copy;{new Date().getFullYear()}. CTTPL - All Rights Reserved
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;