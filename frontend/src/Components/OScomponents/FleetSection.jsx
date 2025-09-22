import React from "react";
import bus2 from "../../images/bus2.png";
import Contact from "../Button/Contact"
import Embedded from "../Button/Embedded"

const FleetSection = () => {
    return (
        <div className="bg-white py-16 overflow-hidden">
            <div className="w-full md:flex items-center relative bg-[#B8DDD9]/16 overflow-visible">

                {/* Left content with extended background */}
                <div className="relative z-10 md:w-2/5 lg:w-1/2 md:pr-10 p-10 md:pl-16 lg:pl-20 xl:pl-24">
                    <div className="absolute inset-0 w-[200vw] left-0 md:left-auto md:right-0 -z-10"></div>

                    <Embedded text="OUR DIVERSE FLEET" />
                    <h2 className="text-5xl font-bold mb-4 pb-6">
                        Trusted Serices<br />
                        <span className="text-red-500">Seamless Journeys</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        From luxury sedans to economy cars and premium coaches, CTPL
              offers a wide range of vehicles. Choose comfort, safety, and
              reliability – every journey, every time.
                    </p>

                    <Contact />
                </div>

                {/* Right side image - Controlled scaling */}
                <div className="md:w-3/5 lg:w-1/2 mt-8 md:mt-0 pr-4 md:pr-8 lg:pr-12 relative z-20 -my-8 md:-my-10 lg:-my-12 xl:-my-14">
                    <div className="lg:transform lg:scale-110 xl:scale-115 2xl:scale-100 lg:origin-left transition-transform duration-300 overflow-hidden rounded-lg max-w-full">
                        <img
                            src={bus2}
              alt="Bus from CTPL fleet"
                            className="shadow-lg w-full h-auto max-h-[80vh]"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FleetSection;
