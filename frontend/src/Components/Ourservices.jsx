import React from 'react';
import { Link } from "react-router-dom";

const Ourservices = () => {
  const services = [
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
      link: '/employee-fleet'
    },
    {
      title: 'Car Leasing Services',
      description: 'Flexible car leasing options that cater to diverse needs, providing well-maintained vehicles for both short and long-term use.',
      link: '/car-leasing'
    },
    {
      title: 'Dedicated Fleet Services',
      description: 'Customized fleet services for businesses, offering dedicated vehicles to meet the unique transportation demands of each client.',
      link: '/dedicated-fleet'
    },
    {
      title: 'School Fleet Services',
      description: 'Reliable and child-friendly transportation for schools, ensuring the safety and punctuality of each ride. Our dedicated fleet is equipped with security features and driven by experienced professionals, providing peace of mind to parents and school administrators alike.',
      link: '/school-fleet'
    },
    {
      title: 'Electric Fleet Services',
      description: 'Sustainable transport solutions with our electric fleet, promoting eco-friendly travel options for businesses and communities. Emissions-free vehicles and cost-effective operation make this service ideal for organizations looking to reduce their carbon footprint and embrace green mobility.',
      link: '/electric-fleet'
    },
  ];

  return (
    <div className="bg-[#f0f3f6] py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Services, <span className="text-[#e74c3c]">One Need</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At Choudhary Tours & Travels Pvt. Ltd. (CTTPPL), we have been a trusted name in the industry for over 35 years, offering comprehensive nationwide services in tours, cabs, and fleet management. Whether you're looking for safe and reliable corporate transportation, customizable tour packages, or efficient fleet solutions, our vast experience and cutting-edge technology ensure smooth and hassle-free journeys. With a fleet strength of 4,000+ vehicles, we provide top-notch service tailored to meet the unique needs of businesses and individuals alike.
        </p>
      </div>

      {/* Responsive Grid for Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-start text-left transition-transform transform hover:scale-105 duration-300"
          >
            <div className="p-2 rounded-full bg-gray-200 mb-4">
              <span className="text-gray-600 font-bold">SD</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
            
            {/* Buttons */}
            <div className="mt-4 flex items-center space-x-2">
              <Link 
                to={service.link} 
                className="bg-[#0A283A] text-white font-medium py-2 px-4 rounded-md hover:bg-gray-300 hover:text-[#0A283A] transition-colors duration-200"
              >
                Know More
              </Link>
              <div className="bg-[#0A283A] p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
