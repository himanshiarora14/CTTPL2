import React from 'react';
import { Link } from "react-router-dom";
import { FaBus, FaCar, FaSchool } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import { LuBus } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

const Ourservices = () => {
  const topServices = [
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
      link: '/employee-fleet',
      icon: <FaBus className="text-2xl text-[#0A283A]" />,
    },
    {
      title: 'Car Leasing Services',
      description: 'Flexible car leasing options that cater to diverse needs, providing well-maintained vehicles for both short and long-term use.',
      link: '/car-leasing',
      icon: <FaCar className="text-2xl text-[#0A283A]" />,
    },
    {
      title: 'Dedicated Fleet Services',
      description: 'Customized fleet services for businesses, offering dedicated vehicles to meet the unique transportation demands of each client.',
      link: '/dedicated-fleet',
      icon: <LuBus className="text-2xl text-white" />,
      highlight: true, // <- special styling
    }
  ];

  const bottomServices = [
    {
      title: 'School Fleet Services',
      description: 'Reliable and child-friendly transportation for schools, ensuring the safety and punctuality of each ride. Our dedicated fleet is equipped with security features and driven by experienced professionals, providing peace of mind to parents and school administrators alike.',
      link: '/school-fleet',
      icon: <FaBus className="text-2xl text-[#0A283A]" />,
    },
    {
      title: 'Electric Fleet Services',
      description: 'Sustainable transport solutions with our electric fleet, promoting eco-friendly travel options for businesses and communities. Emissions-free vehicles and cost-effective operation make this service ideal for organizations looking to reduce their carbon footprint and embrace green mobility.',
      link: '/electric-fleet',
      icon: <MdElectricCar className="text-2xl text-[#0A283A]" />,
    }
  ];

  const renderCard = (service, index) => (
    <div
      key={index}
      className={`rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-start text-left transition-transform transform hover:scale-105 duration-300 
        ${service.highlight ? "bg-[#0A283A] text-white" : "bg-white text-gray-800"}`}
    >
      {/* Icon */}
      <div className={`p-3 rounded-full ${service.highlight ? "bg-[#eab308]" : "bg-gray-200"} mb-4`}>
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 flex-grow">{service.description}</p>

      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        <Link
          to={service.link}
          className={`${service.highlight
            ? "bg-[#eab308] text-black hover:bg-yellow-500"
            : "bg-[#0A283A] text-white hover:bg-gray-300 hover:text-[#0A283A]"} 
            font-medium py-2 px-4 rounded-md transition-colors duration-200`}
        >
          Know More
        </Link>
        <div className= "hover:bg-[#eab308] bg-[#0A283A] p-2 rounded-full cursor-pointer transition-colors duration-20">
        <FaArrowRight color='white'/>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f0f3f6] py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800">
          Our Services, <span className="text-[#e74c3c]">One Need</span>
        </h2>
        <p className="mt-4 text-md text-gray-600 max-w-4xl mx-auto">
          At Choudhary Tours & Travels Pvt. Ltd. (CTTPL), we have been a trusted name in the industry for over 35 years, offering comprehensive nationwide services in tours, cabs, and fleet management. Whether you're looking for safe and reliable corporate transportation, customizable tour packages, or efficient fleet solutions, our vast experience and cutting-edge technology ensure smooth and hassle-free journeys. With a fleet strength of 4,000+ vehicles, we provide top-notch service tailored to meet the unique needs of businesses and individuals alike. 
        </p>
      </div>

      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {topServices.map(renderCard)}
      </div>

      {/* Bottom Grid (50-50) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {bottomServices.map(renderCard)}
      </div>
    </div>
  );
};

export default Ourservices;
