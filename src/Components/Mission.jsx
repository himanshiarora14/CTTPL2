import React from "react";

function MissionVisionPage() {
  return (
    <div className="min-h-screen py-12 px-4 bg-white flex flex-col items-center">
      {/* Mission Section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 mb-12 items-stretch">
        {/* Image */}
        <div className="flex-1 flex items-stretch">
          <img
            src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
            alt="Bus"
            className="rounded-xl w-110 h-full max-h-80 object-cover"
          />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="bg-gray-100 rounded px-4 py-1 text-xs font-semibold w-fit mb-4">
            VALUE DRIVEN
          </span>
          <h2 className="text-4xl font-bold mb-2">
            Our <span className="text-red-500">Mission</span>
          </h2>
          <p className="mb-2 text-gray-700">
            At Choudhary Tours & Travels Pvt. Ltd. (CTTPL), our mission is to deliver safe, reliable, and sustainable transportation solutions that empower organizations and enhance communities.
          </p>
          <p className="text-gray-700">
            We are committed to combining innovation, technology, and customer-first service to ensure seamless mobility experiences. Built on a foundation of trust, integrity, and excellence, we strive to create long-term value for our clients while contributing to a greener and safer future.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row-reverse gap-8 items-stretch">
        {/* Image */}
        <div className="flex-1 flex items-stretch">
          <img
            src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
            alt="Bus"
            className="rounded-xl w-110 h-full max-h-80 object-cover"
          />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="bg-gray-100 rounded px-4 py-1 text-xs font-semibold w-fit mb-4">
            VALUE DRIVEN
          </span>
          <h2 className="text-4xl font-bold mb-2">
            Our <span className="text-red-500">Vision</span>
          </h2>
          <p className="mb-2 text-gray-700">
            Our vision is to establish CTTPL as a leading force in India's transportation industry, recognized for safety, sustainability, and innovation.
          </p>
          <p className="text-gray-700">
            We aspire to transform mobility by embracing eco-friendly fleets, advanced technology, and global best practices. With every service we provide, we aim to make a positive impact on businesses, employees, and society at large, setting new benchmarks in corporate mobility solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVisionPage;

