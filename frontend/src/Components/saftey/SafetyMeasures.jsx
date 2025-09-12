import React, { useState } from 'react';

const SafetyMeasures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "Safety First Approach",
      iconSrc: "/badge.svg",
      content: "Drivers are trained to prioritize safety above all, understanding that reaching on time should never involve risky driving."
    },
    {
      title: "Responsible Driving Standards",
      iconSrc: "/rating.svg",
      content: "Responsible driving standards ensure that all drivers follow traffic regulations, maintain safe speeds, and practice defensive driving techniques to protect themselves and other road users."
    },
    {
      title: "Avoidance of Rash Driving",
      iconSrc: "/safety.svg",
      content: "Our drivers are trained to avoid aggressive driving behaviors such as speeding, tailgating, and sudden lane changes that can lead to accidents and endanger lives."
    },
    {
      title: "Road Safety Commitment",
      iconSrc: "/purse.svg",
      content: "We are committed to maintaining the highest standards of road safety through continuous monitoring, regular safety assessments, and strict adherence to safety protocols."
    },
    {
      title: "Consistent Safety Training",
      iconSrc: "/data-management.svg",
      content: "Regular safety training sessions are conducted to keep drivers updated on latest safety practices, traffic rules, and emergency response procedures."
    }
  ];


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const SidebarItem = ({ text, active = false }) => {
    return (
      <div className="relative flex items-center justify-end">
        <span className={`text-lg leading-tight mr-4 text-right ${active ? 'font-bold text-black' : 'text-gray-700'
          }`}>
          {text}
        </span>
        {/* Circle positioned exactly on the vertical line */}
        <div className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full z-10 ${active ? 'bg-red-500' : 'border-2 border-gray-300 bg-white'
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
              {/* Vertical connecting line - positioned to pass through center of circles */}
              <div className="absolute right-2.5 top-3.5 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                <SidebarItem text="Driver's Road Safety Awareness Training" active />
                <SidebarItem text="Vehicle Maintenance Training" />
                <SidebarItem text="Driver's Induction Training Program" />
                <SidebarItem text="Driver's Routine Training Program" />
                <SidebarItem text="Driver's Recruitment Process" />
                <SidebarItem text="Overall Safety Measures" />
                <SidebarItem text="QRT - Quick Response Team" />
                <SidebarItem text="Crisis Management" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3 lg:border-l lg:border-gray-600 lg:pl-8">
            {/* Accordion Section - NO HEADING */}
            <div className="space-y-0 border-t-1">
              {accordionItems.map((item, index) => (
                <div key={index} className="border-t border-gray-600 first:border-t-0">
                  <button
                    onClick={() => toggleAccordion(index)}
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
                    <div className="ml-11 pb-4 pr-8 sm:ml-14 sm:pb-6 sm:pr-12">
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
