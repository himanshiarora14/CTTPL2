import React from "react";
import bus2 from "../../images/os.png";
import Contact from "../Button/Contact";
import Embedded from "../Button/Embedded";

const FleetSection = () => {
    return (
        <div className="bg-white p-0 md:py-16 overflow-hidden">
            <div className="w-full md:flex items-center relative bg-[#B8DDD9]/16 overflow-visible md:gap-12 lg:gap-20 xl:gap-28">
                
                {/* Left Content */}
                <div className="relative z-10 md:w-2/5 lg:w-1/2 md:pr-6 p-10 md:pl-16 lg:pl-20 xl:pl-24">
                    <div className="absolute inset-0 w-[200vw] left-0 md:left-auto md:right-0 -z-10"></div>

                    <Embedded text="OUR DIVERSE FLEET" />
                    <h2 className="text-5xl font-bold mb-4 pb-6">
                        Trusted Services,<br />
                        <span className="text-red-500">Seamless Journeys</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        From luxury sedans to economy cars and premium coaches, CTPL
                        offers a wide range of vehicles. Choose comfort, safety, and
                        reliability – every journey, every time.
                    </p>

                    <Contact />
                </div>

                {/* Right Side Image */}
                <div className="md:w-3/5 lg:w-1/2 mt-8 md:mt-0 relative z-20 -my-8 md:-my-10 lg:-my-12 xl:-my-14">
                    <div className="lg:transform lg:scale-110 xl:scale-115 2xl:scale-100 lg:origin-left transition-transform duration-300 overflow-hidden rounded-lg max-w-full">
                        <img
                            src={bus2}
                            alt="Bus from CTPL fleet"
                            className="shadow-lg w-auto rounded-2xl h-auto max-h-[64vh]"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FleetSection;
