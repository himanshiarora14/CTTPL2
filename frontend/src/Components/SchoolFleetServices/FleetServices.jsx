import React, { useState } from 'react';

const FleetServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const fleetItems = [
    {
      title: "Student Safety First",
      image: "/assets/schoolfleetservice.png",
      contentIcon: "/assets/safety-icon.svg",
      description: "Safety is our top priority. Our vehicles are equipped with GPS tracking, speed limit monitoring, CCTV cameras, and emergency response systems to ensure the security of every child."
    },
    {
      title: "Trained and Verified Drivers",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "All our drivers undergo rigorous training in safety protocols and are thoroughly background-verified, also regularly counseled to uphold the highest standards of professionalism."
    },
    {
      title: "Reliable and Punctual Services",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "We understand the importance of adhering to school schedules. Our fleet operations are meticulously planned to ensure on-time pickups and drop-offs every day."
    },
    {
      title: "Well-Maintained Vehicles",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "Each vehicle in our fleet undergoes regular maintenance checks to ensure optimal performance, cleanliness, and roadworthiness."
    },
    {
      title: "Technology Integration",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "Advanced technology like real-time tracking allows parents and school authorities to monitor the fleet's location, adding an extra layer."
    },
    {
      title: "Customizable Solutions",
      image: "/assets/schoolfleetservice.png",
      contentIcon:  "/assets/safety-icon.svg",
      description: "Our services are tailored to meet the unique transportation requirements of different schools, whether it's for daily commutes or special events."
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
              <span className="text-[#EC221F]">School Fleet</span><br />
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
                    src={fleetItems[activeIndex].image} 
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

export default FleetServices;
