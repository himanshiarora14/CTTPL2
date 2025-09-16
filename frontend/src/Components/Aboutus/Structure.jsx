import React from "react";

const CompanyStructure = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 items-center gap-8 bg-white rounded-lg">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/bus-that-is-street-with-number-2-front_7023-351910.jpg"
            alt="Company Bus"
            className="rounded-lg shadow-md w-80 h-80 object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="px-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
            Company{" "}
            <span className="text-red-600 font-extrabold">Structure</span>{" "}
            <span className="text-gray-900">and Leadership</span>
          </h2>

          <p className="text-gray-700 mb-2 text-sm md:text-base leading-snug">
            At CTTPL, our strength lies in a well-structured organizational
            setup, featuring experienced leaders and specialized teams. This
            system seamlessly blends strategy, service, and technology, driving
            development across all verticals like fleet, vehicles, and employee
            transport solutions.
          </p>

          <p className="text-gray-700 mb-4 text-sm md:text-base leading-snug">
            Our dedicated and experienced team allows us to raise operational
            efficiency, develop innovative programs, and maintain global
            standards. Together, we ensure consistent performance. The backbone
            of our strength is dedicated individuals committed to excellence and
            quality.
          </p>

          {/* Button */}
          <button className="bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition text-sm md:text-base">
            Know More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyStructure;