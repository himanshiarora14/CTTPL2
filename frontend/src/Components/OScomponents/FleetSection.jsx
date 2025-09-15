import React from "react";
import { Phone } from "lucide-react";

const FleetSection = () => {
  return (
    <section className="w-full flex justify-center px-4 md:px-8">
      <div className="bg-[#f4fafa] rounded-2xl p-8 md:p-12 w-full max-w-7xl">
        {/* Small Tag */}
        <div>
          <span className="px-3 py-1 border rounded-full text-sm font-semibold text-gray-700">
            OUR DIVERSE FLEET
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-snug">
          Trusted <span className="text-red-600">Services,</span> <br />
          Seamless Journeys
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-3xl">
          From luxury sedans to economy cars and premium coaches, CTPL offers a
          wide range of vehicles. Choose comfort, safety, and reliability – every
          journey, every time.
        </p>

        {/* Contact Button */}
        <div className="mt-6">
          <button className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
            Contact Us 
            <span className="bg-white p-1.5 rounded-md">
              <Phone className="w-4 h-4 text-red-600" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
