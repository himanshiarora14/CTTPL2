import React from 'react';
import bus2 from "../images/bus2.png";

export default function Fleethero() {
  return (
    <section className="mx-4 my-6 rounded-2xl bg-[#f2f8f8] p-6 sm:p-8 lg:p-12 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text column */}
        <div className="px-2  text-center lg:text-left">
          <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-xs font-semibold tracking-wider text-gray-600 uppercase mb-6">
            OUR DIVERSE FLEET
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            <span className="text-red-600">Tailored</span> to Your Travel Needs
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles — choose comfort, safety, and
            reliability for every journey.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium shadow-lg transition-transform duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 bg-red-600 text-white hover:bg-red-700"
            >
              Contact Us
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium shadow-lg transition-transform duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 border-2 border-red-600 text-red-600 bg-white hover:bg-red-50"
            >
              Call Us
            </button>
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