import React, { useState } from "react";

const EF = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const fleetItems = [
    "Eco-Friendly Transportation",
    "Advanced Vehicle Safety",
    "Fast and Efficient Charging",
    "Cost-Effective Solutions",
    "Commitment to Innovation",
    "Government Initiative",
  ];

  const SidebarItem = ({ text, active, index }) => (
    <div
      className="relative flex items-center justify-end cursor-pointer group"
      onClick={() => setActiveIndex(index)}
    >
      <span
        className={`text-lg leading-tight mr-4 text-right transition-all duration-200 group-hover:text-red-500 ${
          active ? "font-bold text-red-500" : "text-gray-700"
        }`}
      >
        {text}
      </span>
      <div
        className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full z-10 transition-all duration-200 group-hover:bg-red-400 ${
          active ? "bg-red-500" : "border-2 border-gray-300 bg-white"
        }`}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white mt-8">
      <div className="mx-4 py-6 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:gap-16">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <h1 className="mb-6 text-4xl font-bold text-right sm:text-5xl lg:mb-8">
              <span className="text-red-500">Electric Fleet</span>
              <br />
              <span className="text-black">Services</span>
            </h1>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute right-2.5 top-3.5 bottom-0 w-0.5">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div
                  className="absolute top-0 left-0 w-full bg-red-500 transition-all duration-300 ease-out"
                  style={{
                    height:
                      activeIndex >= 0
                        ? `${((activeIndex + 1) / fleetItems.length) * 100}%`
                        : "0%",
                  }}
                ></div>
              </div>
              <div className="space-y-8">
                {fleetItems.map((item, index) => (
                  <SidebarItem
                    key={index}
                    text={item}
                    active={activeIndex === index}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Blue Card with Image & Text */}
          <div className="w-full lg:w-2/3 lg:pl-8">
            <div className="bg-[#002b49] rounded-2xl overflow-hidden shadow-lg">
              {/* Image */}
              <img
                src="/bus21.png"
                alt="Electric Fleet Bus"
                className="w-full h-64 object-cover"
              />
              {/* Text */}
              <div className="p-6 text-white">
                <div className="flex items-start gap-3">
                  <img src="/image.png" alt="icon" className="w-6 h-6 mt-1" />
                  <p className="text-base leading-relaxed">
                    CTTPL’s electric fleet contributes to a greener environment
                    by significantly reducing carbon emissions, supporting
                    India’s move towards sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EF;
