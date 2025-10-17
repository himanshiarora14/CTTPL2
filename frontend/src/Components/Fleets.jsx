import React from 'react';
import fleets from '../images/fleets.png';
import Quote from './Button/GetQuote';

const Fleets = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 flex flex-col md:gap-4 xl:gap-0 xl:flex-row items-center">
                
                {/* Left content */}
                <div className="w-full xl:w-1/2 md:pr-10 p-6 sm:p-8 md:p-8 lg:h-100 bg-[#F3F9F9] rounded-2xl md:rounded-b-none md:rounded-t-none xl:rounded-tl-4xl xl:rounded-bl-4xl">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 pb-4 md:pb-4">
                        Ready to Experience <br />
                        <span className="text-red-500">Seamless </span>Travel?
                    </h2>
                    <p className="text-base sm:text-md text-gray-700 mb-6">
                        Join thousands of satisfied travelers who trust Chaudhary Tours & Travels Pvt. Ltd. (CTTPL)
                        for safe, affordable, and tech-enabled mobility solutions. With 35+ years of expertise and
                        a fleet of 4,000+ vehicles, we're here to make your journeys comfortable and stress-free.
                        Contact us today and let's plan your next adventure!
                    </p>
                    <Quote/>
                </div>

                {/* Right image */}
                <div className="w-full xl:w-1/2 mt-6 md:mt-0">
                    <img
                        src={fleets}
                        alt="A fleet of modern buses lined up"
                        className="w-full h-auto rounded-2xl md:rounded-3xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Fleets;
