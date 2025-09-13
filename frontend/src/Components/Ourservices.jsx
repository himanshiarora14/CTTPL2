import React from 'react';

const Ourservices = () => {
  const services = [
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
    },
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
    },
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
    },
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
    },
    {
      title: 'Employee Transport Services',
      description: 'Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Services, <span className="text-[#e74c3c]">One Need</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At Choudhary Tours & Travels Pvt. Ltd. (CTTPPL), we have been a trusted name in the industry for over 35 years, offering comprehensive nationwide services in tours, cabs, and fleet management. Whether you're looking for safe and reliable corporate transportation, customizable tour packages, or efficient fleet solutions, our vast experience and cutting-edge technology ensure smooth and hassle-free journeys. With a fleet strength of 4,000+ vehicles, we provide top-notch service tailored to meet the unique needs of businesses and individuals alike.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 3).map((service, index) => (
          <div key={index} className="bg-[#f2f8f8]  rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-start text-left">
            <div className="p-2 rounded-full bg-gray-200 mb-4">
              <span className="text-gray-600 font-bold">SD</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
            <div className="mt-4 flex items-center space-x-2">
              <button className="bg-[#0A283A] text-white font-medium py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200">
                Know More
              </button>
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 mt-8">
        <div className="md:col-span-6 bg-[#f2f8f8]  rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-start text-left">
          <div className="p-2 rounded-full bg-gray-200 mb-4">
            <span className="text-gray-600 font-bold">SD</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Employee Transport Services</h3>
          <p className="mt-2 text-gray-600 flex-grow">
            Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day. Safe and punctual transportation solutions designed for employees.
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <button className="bg-[#0A283A] text-white font-medium py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200">
              Know More
            </button>
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

        {/* Second card (30% width) */}
        <div className="md:col-span-4 bg-[#f2f8f8]  rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-start text-left">
          <div className="p-2 rounded-full bg-gray-200 mb-4">
            <span className="text-gray-600 font-bold">SD</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Employee Transport Services</h3>
          <p className="mt-2 text-gray-600 flex-grow">
            Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <button className="bg-[#0A283A] text-white font-medium py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200">
              Know More
            </button>
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
      </div>
    </div>
  );
};

export default Ourservices;