import React from 'react';
import Embedded from '../Button/Embedded';
import Contact from '../Button/Contact';

const OurStructureHero = () => {
    return (
        <div className="bg-white pb-16 lg:py-16 overflow-hidden">
            <div className="w-full md:flex items-center relative bg-[#B8DDD9]/16 overflow-visible">

                {/* Left content with extended background */}
                <div className="relative z-10 md:w-2/5 lg:w-1/2 p-10 md:pl-16 lg:pl-20 xl:pl-24">
                    <div className="absolute inset-0 w-[200vw] left-0 md:left-auto md:right-0 -z-10"></div>

                    <Embedded text="OUR VALUABLE TEAM" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-6">
                        Our
                        <span className="text-red-500"> Structure </span> <br />& Leadership
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        With experienced leaders and specialized teams, our structure empowers us to deliver safe, reliable, and efficient transport solutions nationwide.
                    </p>

                    <Contact />
                </div>

                {/* Right side image - Fixed overlap without changing size */}
                <div className="md:w-3/5 lg:w-1/2 mt-8 md:mt-0 pr-4 md:pr-8 lg:pr-12 relative z-20 md:my-0 lg:-my-12 xl:-my-14">
                    <div className="lg:transform lg:scale-110 xl:scale-115 2xl:scale-100 lg:origin-left transition-transform duration-300 overflow-hidden rounded-lg max-w-full md:ml-4">
                        <img
                            src="/assets/ourstructure_heroimage.svg"
                            alt="A fleet of modern buses lined up"
                            className="shadow-lg w-full h-auto max-h-[80vh]"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurStructureHero;