import React from "react";

const MissionVision = () => {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-12 space-y-16">
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <img
          src="https://img.freepik.com/premium-photo/bus-that-is-street-with-number-2-front_7023-351910.jpg"
          alt="Mission"
          className="rounded-lg shadow-md w-100 h-90 object-cover mx-auto"
        />
        <div>
          <span className="bg-gray-100 text-xs px-3 py-1 rounded-full font-semibold tracking-wide">
            VALUE DRIVEN
          </span>
          <h2 className="text-3xl font-extrabold mb-4 mt-3">
            <span className="text-gray-900">Our </span>
            <span className="text-red-600">Mission</span>
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed text-justify">
            At Choudhary Tours & Travels Pvt. Ltd. (CTTPL), our mission is to
            deliver safe, reliable, and sustainable transportation solutions
            that empower organizations and enhance communities.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            We are committed to combining innovation, technology, and
            customer-first service to ensure seamless mobility experiences.
            Built on a foundation of trust, integrity, and excellence, we strive
            to create long-term value for our clients while contributing to a
            greener and safer future.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-gray-100 text-xs px-3 py-1 rounded-full font-semibold tracking-wide">
            VALUE DRIVEN
          </span>
          <h2 className="text-3xl font-extrabold mb-4 mt-3">
            <span className="text-gray-900">Our </span>
            <span className="text-red-600">Vision</span>
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed text-justify">
            Our vision is to establish CTTPL as a leading force in India's
            transportation industry, recognized for safety, sustainability, and
            innovation.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            We aspire to transform mobility by embracing eco-friendly fleets,
            advanced technology, and global best practices. With every service
            we provide, we aim to make a positive impact on businesses,
            employees, and society at large, setting new benchmarks in corporate
            mobility solutions.
          </p>
        </div>

        {/* Image */}
        <img
          src="https://img.freepik.com/premium-photo/bus-that-is-street-with-number-2-front_7023-351910.jpg"
          alt="Vision"
          className="rounded-lg shadow-md w-100 h-90 object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default MissionVision;