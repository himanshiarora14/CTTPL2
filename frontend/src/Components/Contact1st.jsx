import React from 'react';
import { FiPhone } from 'react-icons/fi';
import Embedded from './Button/Embedded'
import Contact from './Button/Contact'

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
    <section className="bg-[#edf5f3] lg:m-6 font-sans p-16 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <Embedded text="Let's get in touch" />
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We're Just a <br />
              <span className="text-red-500">Call</span> Away
            </h2>
            <p className="mt-4 md:text-md text-gray-600 max-w-md mx-auto mb-4 lg:mx-0">
              Whether it's travel assistance, fleet solutions, or partnership opportunities, our team is ready to help you. Connect with our experts for tailored transport solutions.
            </p>
            <Contact />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((detail, index) => (
              <div key={index} className="bg-[#0A283A] p-6 rounded-lg shadow-lg text-center">
                <p className="text-xl text-[#FFD166]">{detail.title}</p>
                <p className="mt-1 text-xl font-semibold text-white break-words">
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