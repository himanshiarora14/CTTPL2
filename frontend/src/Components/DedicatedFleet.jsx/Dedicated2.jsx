import React, { useState } from "react";
import img from '../../images/bus7.png'

const SafetyMeasures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  const safetyItems = [
    {
      title: "Customized Fleet Solutions",
      iconSrc: "/badge.svg",
      subItems: [
        {
          content:
            "We tailor the fleet size and type to align with your business operations, ensuring optimized utilization and efficiency, proactively.",
        },
      ],
    },
    {
      title: "Advanced Tech Integration",
      iconSrc: "/rating.svg",
      subItems: [
        {
          content:
            "Real-time tracking, automated scheduling, and route optimization ensure hassle-free operations while keeping you informed at every step.",
        },
      ],
    },
    {
      title: "Dedicated Support Team",
      iconSrc: "/safety.svg",
      subItems: [
        {
          content:
            "A committed team is assigned to manage and monitor your fleet operations, ensuring smooth functioning with minimal disruptions.",
        },
      ],
    },
    {
      title: "Cost Effective Solutions",
      iconSrc: "/data-management.svg",
      subItems: [
        {
          content:
            "By offering fixed pricing structures and optimized operations, we help you reduce transportation costs without compromising on quality.",
        },
      ],
    },
    {
      title: "Safety First",
      iconSrc: "/badge.svg",
      subItems: [
        {
          content:
            "Equipped with GPS tracking and emergency support systems, our vehicles prioritize the safety of passengers.",
        },
      ],
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
    // keep expandedSubItems logic out for now (not used)
  };

  const SidebarItem = ({ text, active = false, index }) => (
    <div
      role="button"
      tabIndex={0}
      onClick={() => handleItemClick(index)}
      onKeyPress={(e) => {
        if (e.key === "Enter") handleItemClick(index);
      }}
      className="relative flex items-center justify-end cursor-pointer group"
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
      />
    </div>
  );

  const contentToDisplay =
    safetyItems[activeIndex]?.subItems?.[0]?.content ||
    "No details available for this section.";

  // computed progress height string
  const progressPercent = `${((activeIndex + 1) / safetyItems.length) * 100}%`;

  return (
    <div className="min-h-screen bg-white mt-8">
      <div className="mx-4 py-6 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:gap-16">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3">
            <h1 className="mb-6 text-4xl font-bold text-right sm:text-5xl lg:mb-8">
              <span className="text-red-500">Dedicated</span>
              <br />
              <span className="text-red-500">Fleet </span>
              <span className="text-black ml-2">Services</span>
            </h1>

            <div className="relative">
              {/* Vertical connecting line with progress effect */}
              <div className="absolute right-2.5 top-3.5 bottom-0 w-0.5">
                <div className="absolute inset-0 bg-gray-300" />
                <div
                  className="absolute top-0 left-0 w-full bg-red-500 transition-all duration-300 ease-out"
                  style={{ height: progressPercent }}
                />
              </div>

              <div className="space-y-8 pr-6">
                {safetyItems.map((item, index) => (
                  <SidebarItem
                    key={index}
                    text={item.title}
                    active={activeIndex === index}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 p-6 md:p-10 flex items-center justify-center">
            <div className="relative w-full max-w-[740px]">
              <div className="w-full h-[380px] p-4 rounded-xl bg-[#0A283A] border-2 shadow-xl overflow-hidden flex items-center justify-center min-h-[300px]">
                {loading ? (
                  <div className="flex flex-col items-center justify-center text-white">
                    <div className="animate-spin  h-12 w-12 border-t-2 border-b-2 border-white mb-4" />
                  </div>
                ) : (
                  <img
                    src={img}
                    alt="Dynamically generated"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                )}
              </div>

              {/* Blue overlay card positioned below the image with a gap */}
              <div className="absolute  -bottom-8 transform translate-y-6 bg-[#0A283A] rounded-2xl p-4 text-white text-sm lg:text-base shadow-md">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-5 mt-1 flex-shrink-0 text-blue-300"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.75L5.75 12.5l1.06-1.06L11 14.63l6.54-6.54 1.06 1.06L11 17.75z" />
                  </svg>
                  <p>{contentToDisplay}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default SafetyMeasures;
