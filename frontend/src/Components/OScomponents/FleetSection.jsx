import React from "react";
import { Phone } from "lucide-react";
import bus2 from "../../images/bus2.png";


const FleetSection = () => {
  return (
    <section className="w-full flex justify-center px-4 md:px-8 py-12">
      <div className="w-full max-w-7xl bg-[#f4fafa] rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center bg-[#f4fafa] rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
            <div>
              <span className="px-3 py-1 border rounded-full text-sm font-semibold text-gray-700">
                OUR DIVERSE FLEET
              </span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Trusted <span className="text-red-600">Services,</span>
              <br />
              Seamless Journeys
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl">
              From luxury sedans to economy cars and premium coaches, CTPL
              offers a wide range of vehicles. Choose comfort, safety, and
              reliability – every journey, every time.
            </p>
            <div className="mt-6">
              <button className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
                Contact Us
                <span className="bg-white p-1.5 rounded-md">
                  <Phone className="w-4 h-4 text-red-600" />
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-50 lg:h-auto">
            <img
              alt="Bus from CTPL fleet"
              className="w-full h-full object-cover lg:object-cover lg:h-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
