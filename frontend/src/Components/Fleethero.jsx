import React from 'react';
import bus2 from "../images/fo.png";
import Embedded from './Button/Embedded';
import Contact from './Button/Contact';

export default function Fleethero() {
  return (
    <section className="mx-4 my-6 rounded-2xl bg-[#f2f8f8] p-6 sm:p-8 lg:p-12 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="px-2  text-center lg:text-left">
          <Embedded text="OUR DIVERSE FLEET" />
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-red-600">Tailored</span> to Your Travel Needs
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles — choose comfort, safety, and
            reliability for every journey.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Contact/>
          </div>
        </div>

        {/* Image column */}
        <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-tr from-white to-gray-100">
          <img
            src={bus2}
            alt="CTTPL fleet example - buses and cars"
            loading="lazy"
            className="w-full h-full object-cover object-center block"
          />
        </div>
      </div>
    </section>
  );
}