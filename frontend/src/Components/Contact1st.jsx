import React from 'react';
import { FiPhone } from 'react-icons/fi'; // Using an icon from Feather Icons

const Contact1st = () => {
  const contactDetails = [
    {
      title: 'Meet us at:',
      info: 'Y-348, C/2, Sector-12, Noida - 201301',
    },
    {
      title: 'Call us at:',
      info: '+91-97737 83869',
    },
    {
      title: 'Chat with us:',
      info: 'whatsapp number',
    },
    {
      title: 'Email us at:',
      info: 'business@choudharytours.in',
    },
  ];

  return (
    <section className="bg-[#f2f8f8] lg:m-6 font-sans p-16 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-xs font-semibold tracking-wider text-gray-600 uppercase mb-4">
              Let's get in touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              We're Just a <br />
              <span className="text-red-500">Call Away</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Whether it's travel assistance, fleet solutions, or partnership opportunities, our team is ready to help you. Connect with our experts for tailored transport solutions.
            </p>
            <button className="mt-8 inline-flex items-center bg-red-500 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out">
              Contact Us
              <span className="ml-3 bg-white text-red-500 p-2 rounded-md">
                <FiPhone size={16} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((detail, index) => (
              <div key={index} className="bg-[#004e64] p-6 rounded-lg shadow-lg">
                <p className="text-sm text-[#FFD369]">{detail.title}</p>
                <p className="mt-1 text-lg font-semibold text-white break-words">
                  {detail.info}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact1st;