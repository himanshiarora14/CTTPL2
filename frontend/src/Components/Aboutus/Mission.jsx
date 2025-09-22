import React from "react";
import img1 from '../../images/bus3.png'
import img2 from '../../images/bus4.png'

const MissionVision = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-15">
      {/* Mission - image left, text right */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={img1}
              alt="Mission - bus on road"
              className="w-full h-80 sm:h-96 md:h-[20rem] lg:h-[22rem] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
           <span className="inline-block px-3 py-1 text-xs font-semibold border-2 tracking-wide rounded-xl border-[#B8DDD9] text-black">
            VALUE DRIVEN
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Our </span>
            <span className="text-red-600">Mission</span>
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              At <strong>Choudhary Tours &amp; Travels Pvt. Ltd. (CTTPL)</strong>,
              our mission is to deliver safe, reliable, and sustainable
              transportation solutions that empower organizations and enhance
              communities.
            </p>

            <p>
              We are committed to combining innovation, technology, and
              customer-first service to ensure seamless mobility experiences.
              Built on a foundation of trust, integrity, and excellence, we
              strive to create long-term value for our clients while
              contributing to a greener and safer future.
            </p>
          </div>
        </div>
      </div>

      {/* Vision - text left, image right */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold border-2 tracking-wide rounded-xl border-[#B8DDD9] text-black">
            VALUE DRIVEN
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Our </span>
            <span className="text-red-600">Vision</span>
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              Our vision is to establish CTTPL as a leading force in India's
              transportation industry, recognized for safety, sustainability,
              and innovation.
            </p>

            <p>
              We aspire to transform mobility by embracing eco-friendly fleets,
              advanced technology, and global best practices. With every
              service we provide, we aim to make a positive impact on businesses,
              employees, and society at large, setting new benchmarks in corporate
              mobility solutions.
            </p>
          </div>
        </div>

        {/* Image (right) */}
        <div className="w-full">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={img2}
              alt="Vision - bus on road"
              className="w-full h-80 sm:h-96 md:h-[20rem] lg:h-[22rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
