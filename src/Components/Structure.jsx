import React from "react";

const CompanyStructure = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 items-center gap-10 bg-white rounded-lg">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/bus-that-is-street-with-number-2-front_7023-351910.jpg"
            alt="Company Bus"
            className="rounded-lg shadow-md w-96 h-72 object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 leading-snug">
            Company{" "}
            <span className="text-red-600">Structure</span>{" "}
            <span className="text-gray-900">and Leadership</span>
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            At CTTPL, our strength lies in a well-structured organizational
            setup, featuring experienced leaders and specialized teams. This
            system seamlessly blends strategy, service, and technology, driving
            development across all verticals like fleet, vehicles, and employee
            transport solutions.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our dedicated and experienced team allows us to raise operational
            efficiency, develop innovative programs, and maintain global
            standards. Together, we ensure consistent performance. The backbone
            of our strength is dedicated individuals committed to excellence and
            quality.
          </p>

          {/* Button */}
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition">
            Know More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyStructure;
