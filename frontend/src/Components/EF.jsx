import React, { useState } from 'react';
import img from '../images/bus10.png'

const EF = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const fleetItems = [
    {
      title: "Eco-Friendly Transportation",
      image: "/assets/schoolfleetservice.png",
      contentIcon: "/assets/safety-icon.svg",
      description: "CTTPL’s electric fleet contributes to a greener environment by significantly reducing carbon emissions, supporting India’s move towards sustainability."
    },
    {
      title: "Advanced Vehicle Safety",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "Each electric vehicle is equipped with state-of-the-art safety and security features, ensuring reliable and secure transportation for all passengers."
    },
    {
      title: "Fast and Efficient Charging",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "Our innovative charging substations enable quick and efficient vehicle recharging, minimizing downtime and maximizing fleet availability."
    },
    {
      title: "Cost-Effective Solutions",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "With lower operational costs and government policy incentives, our electric fleet offers businesses an economical way to adopt sustainability."
    },
    {
      title: "Commitment to Innovation",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "As early adopters of EV technology, CTTPL stays ahead with cutting-edge solutions that blend sustainability with performance."
    },
    {
      title: "Government Initiative",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "CTTPL aligns with the Indian Government's vision of sustainable mobility by integrating electric fleets into our operations."
    }
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
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
        <div className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full z-10 transition-all duration-200 group-hover:bg-red-400 ${
          active ? 'bg-red-500' : 'border-2 border-gray-300 bg-white'
        }`}></div>
      </div>
    );
  };

  return (
    <div className=" bg-white mt-8">
      <div className="mx-4 py-6 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:gap-16">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3">
            <h1 className="mb-6 text-4xl font-bold text-right sm:text-5xl lg:mb-8">
              <span className="text-[#EC221F]">Electric Fleet</span><br />
              <span className="text-black">Services</span>
            </h1>
            <div className="relative">
              {/* Vertical connecting line with progress effect */}
              <div className="absolute right-2.5 top-3.5 bottom-0 w-0.5">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div 
                  className="absolute top-0 left-0 w-full bg-[#EC221F] transition-all duration-300 ease-out"
                  style={{
                    height: activeIndex >= 0 ? `${((activeIndex + 1) / fleetItems.length) * 100}%` : '0%'
                  }}
                ></div>
              </div>
              <div className="space-y-8">
                {fleetItems.map((item, index) => (
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
            {activeIndex >= 0 && activeIndex < fleetItems.length && (
              <div className="rounded-2xl p-6" style={{backgroundColor: '#0A283A'}}>
                {/* Image on top - DYNAMIC */}
                <div className="mb-6">
                  <img 
                    src={img} 
                    alt={`${fleetItems[activeIndex].title} Vehicle`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                
                {/* Content section with dynamic icon on left and text on right */}
                <div className="flex items-start gap-4">
                  {/* Dynamic content icon on left */}
                  <div className="flex-shrink-0 w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center">
                    <img 
                      src={fleetItems[activeIndex].contentIcon} 
                      alt={`${fleetItems[activeIndex].title} icon`} 
                    />
                  </div>
                  
                  {/* Content on right */}
                  <div className="flex-1">
                    <p className="text-white text-lg leading-relaxed">
                      {fleetItems[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EF;
