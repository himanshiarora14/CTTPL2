import React, { useState } from 'react';

const SafetyMeasures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const safetyItems = [
    {
      title: "Driver's Road Safety Awareness Training",
      iconSrc: "/badge.svg",
      content: "Comprehensive training programs designed to enhance driver awareness of road safety protocols, traffic regulations, and defensive driving techniques. Our drivers learn to anticipate potential hazards and respond appropriately to ensure passenger and public safety."
    },
    {
      title: "Vehicle Maintenance Training",
      iconSrc: "/rating.svg", 
      content: "Systematic training on vehicle inspection procedures, maintenance schedules, and basic troubleshooting. Drivers are equipped with knowledge to identify potential mechanical issues before they become safety hazards, ensuring vehicles remain roadworthy."
    },
    {
      title: "Driver's Induction Training Program",
      iconSrc: "/safety.svg",
      content: "Comprehensive orientation program for new drivers covering company policies, safety standards, customer service protocols, and operational procedures. This foundational training ensures all drivers meet our high standards from day one."
    },
    {
      title: "Driver's Routine Training Program", 
      iconSrc: "/purse.svg",
      content: "Regular ongoing training sessions to refresh and update driver skills, introduce new safety protocols, and address emerging challenges in transportation. These sessions ensure continuous improvement in driver performance and safety awareness."
    },
    {
      title: "Driver's Recruitment Process",
      iconSrc: "/data-management.svg",
      content: "Rigorous selection process including background checks, driving record verification, skill assessments, and psychological evaluations. We ensure only qualified, reliable, and safety-conscious individuals join our driver network."
    },
    {
      title: "Overall Safety Measures",
      iconSrc: "/badge.svg",
      content: "Comprehensive safety framework encompassing all aspects of our operations, from vehicle standards to driver protocols. Regular safety audits, incident analysis, and continuous improvement processes maintain the highest safety standards across all services."
    },
    {
      title: "QRT - Quick Response Team",
      iconSrc: "/rating.svg",
      content: "Specialized rapid response unit trained to handle emergencies, breakdowns, and critical situations. Available 24/7 to provide immediate assistance, coordinate emergency services, and ensure passenger safety in any unexpected circumstances."
    },
    {
      title: "Crisis Management",
      iconSrc: "/safety.svg", 
      content: "Structured protocols and procedures for managing various crisis scenarios including accidents, natural disasters, and security threats. Our crisis management team is trained to respond quickly and effectively to minimize risks and ensure safety."
    }
  ];

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const SidebarItem = ({ text, active = false, index }) => {
    return (
      <div 
        className="relative flex items-center justify-end cursor-pointer group"
        onClick={() => handleItemClick(index)}
      >
        <span className={`text-lg leading-tight mr-4 text-right transition-all duration-200 group-hover:text-red-500 ${
          active ? 'font-bold text-red-500' : 'text-gray-700'
        }`}>
          {text}
        </span>
        {/* Circle positioned exactly on the vertical line */}
        <div className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full z-10 transition-all duration-200 group-hover:bg-red-400 ${
          active ? 'bg-red-500' : 'border-2 border-gray-300 bg-white'
        }`}></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white mt-8">
      <div className="mx-4 py-6 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:gap-16">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3">
            <h1 className="mb-6 text-4xl font-bold text-right sm:text-5xl lg:mb-8">
              <span className="text-red-500">Safety</span><br />
              <span className="text-black">Measures</span>
            </h1>

            <div className="relative">
              {/* Vertical connecting line with progress effect */}
              <div className="absolute right-2.5 top-3.5 bottom-0 w-0.5">
                {/* Gray background line */}
                <div className="absolute inset-0 bg-gray-300"></div>
                {/* Red progress line */}
                <div 
                  className="absolute top-0 left-0 w-full bg-red-500 transition-all duration-300 ease-out"
                  style={{
                    height: activeIndex >= 0 ? `${((activeIndex + 1) / safetyItems.length) * 100}%` : '0%'
                  }}
                ></div>
              </div>

              <div className="space-y-8">
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
          <div className="w-full lg:w-2/3 lg:pl-8">
            {/* Accordion Section */}
            <div className="space-y-0 border-t-1">
              {safetyItems.map((item, index) => (
                <div key={index} className="border-t border-gray-600 first:border-t-0">
                  <button
                    onClick={() => handleItemClick(index)}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors duration-200 hover:bg-gray-50 sm:py-6"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded border border-gray-400 bg-white sm:h-10 sm:w-10">
                        <img
                          src={item.iconSrc}
                          alt={`${item.title} icon`}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </div>
                      <span className="text-base font-medium text-black sm:text-lg lg:text-xl">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
                      {activeIndex === index ? (
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {activeIndex === index && (
                    <div className="ml-11 pb-4 pr-8 sm:ml-14 sm:pb-6 sm:pr-12 animate-in slide-in-from-top-2 duration-200">
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMeasures;