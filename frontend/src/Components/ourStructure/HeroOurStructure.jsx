import React from 'react';

const OurStructureHero = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 md:flex items-center">

                <div className="md:w-1/2 md:pr-10 p-10 bg-gray-100 rounded-bl-4xl rounded-tl-4xl">
                    <div className="border border-[#B8DDD9] flex justify-center items-center w-fit px-4 md:px-5 h-10 md:h-14 rounded-[10px]">
                    <p className="text-xs sm:text-sm md:text-[15px] lg:text-[14px] font-bold text-gray-800 tracking-wide">OUR VALUABLE TEAM</p>
                </div>
                    <h2 className="text-4xl font-bold mb-4 pb-6">
                        Our
                        <span className="text-red-500"> Structure </span> <br />& Leadership
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        With experienced leaders and specialized teams, our structure empowers us to deliver safe, reliable, and efficient transport solutions nationwide.
                    </p>
                    <button className="w-fit flex justify-center items-center gap-2 md:gap-4 bg-[#EC221F] border-none rounded-[8px] px-4 md:px-4 py-3 md:py-2 cursor-pointer hover:bg-[#d11e1b] transition-colors duration-200 shadow-lg">
                        <p className="text-white text-base md:text-xl lg:text-xl font-medium">Contact Us</p>
                        <img src="/call.svg" alt="call" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                    </button>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="/assets/ourstructure_heroimage.svg"
                        alt="A fleet of modern buses lined up"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurStructureHero;