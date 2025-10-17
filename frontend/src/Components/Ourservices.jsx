import React from 'react';
import { Link } from "react-router-dom";
import { FaBus, FaCar } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import { LuBus } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

const Ourservices = () => {
  const topServices = [
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
      link: '/employee-transport-service',
      icon: <FaBus className="text-2xl" />,
    },
    {
      title: 'Car Leasing Services',
      description: 'Flexible car leasing options that cater to diverse needs, providing well-maintained vehicles for both short and long-term use.',
      link: '/car-leasing',
      icon: <FaCar className="text-2xl" />,
    },
    {
      title: 'Dedicated Fleet Services',
      description: 'Customized fleet services for businesses, offering dedicated vehicles to meet the unique transportation demands of each client.',
      link: '/dedicated-fleet-service',
      icon: <LuBus className="text-2xl" />,
    }
  ];

  const bottomServices = [
    {
      title: 'School Fleet Services',
      description: 'Reliable and child-friendly transportation for schools, ensuring the safety and punctuality of each ride. Our dedicated fleet is equipped with security features and driven by experienced professionals, providing peace of mind to parents and school administrators alike.',
      link: '/school-fleet',
      icon: <FaBus className="text-2xl" />,
    },
    {
      title: 'Electric Fleet Services',
      description: 'Sustainable transport solutions with our electric fleet, promoting eco-friendly travel options for businesses and communities. Emissions-free vehicles and cost-effective operation make this service ideal for organizations looking to reduce their carbon footprint and embrace green mobility.',
      link: '/electric-fleet-service',
      icon: <MdElectricCar className="text-2xl" />,
    }
  ];

  const renderCard = (service, index) => (
    <div
      key={index}
      className="group rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-start text-left transition-all duration-300 bg-white text-gray-800 hover:bg-[#0A283A] hover:text-white hover:shadow-xl hover:-translate-y-2"
    >
      {/* Icon */}
      <div className="p-3 rounded-full bg-gray-200 mb-4 transition-colors duration-300 group-hover:bg-[#F1B301]">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-xs flex-grow">{service.description}</p>

      <div className="mt-4 flex items-center space-x-2">
        <Link
          to={service.link}
          className="bg-[#0A283A] text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 
                     group-hover:bg-[#eab308] group-hover:text-black"
        >
          Know More
        </Link>
        <div className="bg-[#0A283A] p-2 rounded-full cursor-pointer transition-colors duration-200 
                        group-hover:bg-[#eab308]">
          <Link to={service.link}> <FaArrowRight className="text-white group-hover:text-black" /></Link>

        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f0f3f6] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800">
          Our Services, <span className="text-[#e74c3c]">One Need</span>
        </h2>
        <p className="mt-4 text-md text-gray-600 max-w-4xl mx-auto">
          At Choudhary Tours & Travels Pvt. Ltd. (CTTPL), we have been a trusted name in the industry for over 35 years, offering comprehensive nationwide services in tours, cabs, and fleet management. Whether you're looking for safe and reliable corporate transportation, customizable tour packages, or efficient fleet solutions, our vast experience and cutting-edge technology ensure smooth and hassle-free journeys. With a fleet strength of 4,000+ vehicles, we provide top-notch service tailored to meet the unique needs of businesses and individuals alike.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {topServices.map(renderCard)}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {bottomServices.map(renderCard)}
      </div>
    </div>
  );
};

export default Ourservices;
