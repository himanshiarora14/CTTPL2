import React from 'react';
// Make sure the path to your image is correct
import seamless2 from '../images/seamless.png'; 

function Seamless() {
    return (
        <div className="bg-gray-100 font-sans flex justify-center items-center py-16 px-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-6xl w-full flex flex-col lg:flex-row">
                
                {/* Left Section - Image */}
                <div className="lg:w-1/2">
                    <img
                        src={seamless2}
                        alt="A luxury bus driving on a road next to the ocean."
                        // Set a fixed height on mobile and let it fill on larger screens
                        className="w-full h-140 lg:h-170 object-cover" 
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="lg:w-1/2 p-4 lg:p-6 flex flex-col justify-center">
                    <div className="mb-4">
                        <span className="text-gray-500 text-sm font-semibold border border-gray-300 rounded-full px-4 py-1 uppercase tracking-wide">
                            Seamless Services
                        </span>
                    </div>
                    {/* Responsive font size for the heading */}
                    <h1 className="text-xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                        <span className="text-red-600">Over 35 Years of Experience</span> in Mobility Solutions
                    </h1>
                    {/* Reduced bottom margin on paragraphs */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Choudhary Tours & Travels Pvt. Ltd. (CTTPPL) stands as a trusted leader in the transportation industry since three and a half decade, committed to delivering innovative and reliable solutions tailored to the diverse needs of employee transport services, car leasing services, dedicated fleet services, school fleet services, electric fleet services across India.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Our unwavering commitment to excellence, safety, and customer satisfaction has established us as a benchmark in the industry. We look forward to continuing our journey of growth, innovation, and partnership, ensuring that we remain the preferred choice for all your transportation needs.
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center text-gray-700">
                            <span className="text-red-600 text-xl mr-2">▶</span> Corporate Employee Transports
                        </div>
                        <div className="flex items-center text-gray-700">
                            <span className="text-red-600 text-xl mr-2">▶</span> Fleet Leasing & Management
                        </div>
                        <div className="flex items-center text-gray-700">
                            <span className="text-red-600 text-xl mr-2">▶</span> Luxury & Premium Car Rentals
                        </div>
                        <div className="flex items-center text-gray-700">
                            <span className="text-red-600 text-xl mr-2">▶</span> Event & Group Travel Solutions
                        </div>
                        <div className="flex items-center text-gray-700">
                            <span className="text-red-600 text-xl mr-2">▶</span> Staff Shuttle & Bus Services
                        </div>
                        <div className="flex items-center text-gray-700">
                            <span className="text-red-600 text-xl mr-2">▶</span> Airport & Outstation Transfers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seamless;