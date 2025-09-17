import React from 'react';
import fleets from '../images/fleets.png';

const Fleets = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 md:flex items-center">
                <div className="md:w-1/2 md:pr-10 p-10 bg-gray-100 rounded-bl-4xl rounded-tl-4xl">
                    <h2 className="md:text-5xl text-3xl font-bold mb-4 pb-6">
                        Ready to Experience <br />
                        <span className="text-red-500">Seamless </span>Travel?
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Join thousands of satisfied travelers who trust Chaudhary Tours & Travels Pvt. Ltd. (CTTPL)
                        for safe, affordable, and tech-enabled mobility solutions. With 35+ years of expertise and
                        a fleet of 4,000+ vehicles, we're here to make your journeys comfortable and stress-free.
                        Contact us today and let's plan your next adventure!
                    </p>
                    <a
                        href="/quote"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Get Quote
                    </a>

                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src={fleets}
                        alt="A fleet of modern buses lined up"
                        className="rounded-3xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Fleets;