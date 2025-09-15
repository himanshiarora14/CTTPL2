import React from 'react';
import { IoCall } from "react-icons/io5";

const GrowWithUs = () => {
  return (
    <section className="bg-gray-50 font-sans">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-8 py-8 md:py-8">
        
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <span className="inline-block border border-gray-300 text-gray-600 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
            Powered by People
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            <span className="text-red-600">Grow</span> with Us &
            <br />
            Move with Us
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
            At CTTPL, we believe our people drive our success. Be part of a culture
            built on integrity, innovation, and growth—where every role
            contributes to keeping India moving.
          </p>

          <button className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 mx-auto lg:mx-0 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300">
            Contact Us
            <IoCall size={18} />
          </button>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
            alt="A team of professionals collaborating in a modern office"
            className="w-full h-full max-h-[500px] rounded-lg object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GrowWithUs;