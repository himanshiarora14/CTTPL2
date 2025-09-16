import React from "react";
import seamless2 from "../images/seam.png";

function Seamless() {
  return (
    <div className="font-sans flex justify-center items-center py-16 px-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-6xl w-full flex flex-col lg:flex-row items-stretch gap-6">
        
        {/* Image Section */}
        <div className="lg:w-2/5 h-full">
          <img
            src={seamless2}
            alt="Luxury bus on the road"
            className="w-full h-120 object-cover rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-3/5 h-full p-8 flex flex-col justify-center bg-white rounded-3xl lg:rounded-r-3xl lg:rounded-l-none">
          {/* Tag */}
          <div className="mb-4">
            <span className="text-gray-700 text-sm font-semibold border border-gray-300 rounded-full px-4 py-1 uppercase tracking-wide">
              Seamless Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            Over <span className="text-red-600">35 Years of Experience</span> in Mobility Solutions
          </h1>

          {/* Paragraphs */}
          <p className="text-gray-600 leading-relaxed mb-4">
            Choudhary Tours & Travels Pvt. Ltd. (CTTPPL) stands as a trusted leader in the transportation industry since three and a half decades, committed to delivering innovative and reliable solutions tailored to the diverse needs of employee transport services, car leasing services, dedicated fleet services, school fleet services, electric fleet services across India.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our unwavering commitment to excellence, safety, and customer satisfaction has established us as a benchmark in the industry. We look forward to continuing our journey of growth, innovation, and partnership, ensuring that we remain the preferred choice for all your transportation needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Seamless;
