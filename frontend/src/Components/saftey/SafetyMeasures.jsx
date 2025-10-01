import React, { useState } from 'react';

const SafetyMeasures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedSubItems, setExpandedSubItems] = useState({});

  const safetyItems = [
    {
      title: "Driver's Road Safety Awareness Training",
      iconSrc: "/badge.svg",
      subItems: [
        {
          title: "Safety First Approach",
          content: "Drivers are trained to prioritize safety above all, understanding that reaching on time should never involve risky driving."
        },
        {
          title: "Responsible Driving Standards", 
          content: "CTTPL emphasizes that safe driving, not speed, is key to delivering quality transport services."
        },
        {
          title: "Avoidance of Rash Driving",
          content: "Our drivers are educated to avoid fast or aggressive driving habits, ensuring passengers experience a smooth and safe journey."
        },
        {
          title: "Road Safety Commitment",
          content: "Through safety awareness programs, drivers are reminded of the importance of adhering to road rules at all times."
        },
        {
          title: "Consistent Safety Training",
          content: "CTTPL's road safety programs reinforce rule compliance and responsible driving practices under all conditions."
        }
      ]
    },
    {
      title: "Vehicle Maintenance Training",
      iconSrc: "/rating.svg",
      subItems: [
        {
          title: "Safety Awareness",
          content: "All CTTPL drivers are kept informed of the latest advancements in vehicle maintenance to ensure maximum safety on the road."
        },
        {
          title: "Routine Inspections",
          content: "We conduct regular, comprehensive vehicle checks to identify and address any potential issues, maintaining optimal performance standards."
        },
        {
          title: "Driver Training Programs",
          content: "Full-day training sessions are regularly organized, providing drivers with updated knowledge and best practices."
        },
        {
          title: "Comprehensive Maintenance Skills",
          content: "Our training covers essential areas, including vehicle maintenance routines, to equip drivers with the skills to ensure the health of the fleet."
        },
        {
          title: "Emergency & Defensive Driving",
          content: "Drivers are trained in defensive driving techniques and emergency handling procedures, preparing them to respond effectively in the event of a breakdown."
        }
      ]
    },
    {
      title: "Driver's Induction Training Program",
      iconSrc: "/safety.svg",
      subItems: [
        {
          title: "Introduction to CTTPL",
          content: "New drivers are introduced to the company's mission, values, and operations, ensuring they understand CTTPL's goals."
        },
        {
          title: "Job Responsibilities and Procedures",
          content: "Drivers learn about their specific roles, daily responsibilities, and standard operating procedures to maintain consistent service standards."
        },
        {
          title: "Rules & Safety Compliance",
          content: "Training includes an overview of all safety protocols, regulations, and compliance requirements essential for safe transport."
        },
        {
          title: "Interpersonal Skills Development",
          content: "New drivers are trained in customer service and effective communication to provide a positive experience for passengers."
        },
        {
          title: "Legal and Regulatory Awareness",
          content: "Drivers are informed of important legal guidelines and compliance standards to ensure they operate within the law."
        }
      ]
    },
    {
      title: "Driver's Routine Training Program",
      iconSrc: "/purse.svg",
      subItems: [
        {
          title: "Refresher on Safety Protocols",
          content: "Quarterly sessions revisit safety measures to reinforce safe driving practices and ensure high standards."
        },
        {
          title: "Continuous Improvement",
          content: "Drivers receive ongoing feedback and training on improving service quality, including updates on safety advancements and vehicle handling."
        },
        {
          title: "Feedback-Based Training",
          content: "Feedback from recent performance is reviewed to address areas for improvement, emphasizing accountability and growth."
        },
        {
          title: "Reinforcement of Rules and Regulations",
          content: "Routine training strengthens the drivers' understanding of company policies and regulatory standards, promoting consistent adherence."
        },
        {
          title: "Enhanced Interpersonal Skills",
          content: "Refresher training sharpens customer service skills, maintaining positive client-driver interactions and enhancing customer satisfaction."
        }
      ]
    },
    {
      title: "Driver's Recruitment Process",
      iconSrc: "/data-management.svg",
      subItems: [
        {
          title: "Referral-Based Hiring",
          content: "CTTPL follows a referral recruitment process, sourcing drivers through our team and established professional networks."
        },
        {
          title: "Essential Licensing and Interview Process",
          content: "Candidates must possess a valid Commercial Driving License and pass an interview assessing their vehicle knowledge and familiarity with local routes."
        },
        {
          title: "Driving and Regulations Test",
          content: "All candidates undergo a practical driving trial and a separate regulations test to ensure driving proficiency and policy adherence."
        },
        {
          title: "Document Verification",
          content: "Each candidate's documents, including a valid license, residential proof, ID, photos, and references, are thoroughly authenticated."
        },
        {
          title: "On-the-Job Observation Period",
          content: "Selected drivers enter a 15-day training phase, monitored closely through a backup fleet, evaluating their safety awareness, driving conduct, route knowledge, discipline, and interpersonal skills."
        }
      ]
    },
    {
      title: "Overall Safety Measures",
      iconSrc: "/badge.svg",
      subItems: [
        {
          title: "Strict Compliance with Commercial Regulations",
          content: "CTTPL adheres to all regulatory standards set by authorities for commercial vehicles and drivers, ensuring full compliance."
        },
        {
          title: "Real-Time GPS Monitoring",
          content: "Each vehicle is equipped with GPS tracking to monitor routes and enhance passenger safety and service reliability."
        },
        {
          title: "Experienced and Safety-Conscious Drivers",
          content: "Only drivers with solid experience, professionalism, and a strong understanding of safety protocols are deployed."
        },
        {
          title: "Enhanced Safety for Female Passengers",
          content: "Additional protective measures are implemented to ensure the well-being and comfort of female commuters."
        },
        {
          title: "Equipped for Communication and Emergencies",
          content: "Vehicles and drivers are equipped with emergency contact numbers, control room access, and hands-free mobile devices with in-car chargers for constant communication."
        }
      ]
    },
    {
      title: "QRT - Quick Response Team",
      iconSrc: "/rating.svg",
      subItems: [
        {
          title: "24/7 Control Room Support",
          content: "Our Control Room operates round-the-clock to handle all operational calls, responding quickly to breakdowns and emergencies."
        },
        {
          title: "Swift Emergency Response",
          content: "In case of an emergency, backup cabs are immediately dispatched or directed to the location to provide quick assistance."
        },
        {
          title: "Mobile Backup Cabs Around the City",
          content: "Three mobile backup cabs are strategically stationed across the city to respond rapidly to breakdowns or urgent needs."
        },
        {
          title: "Panic Button for Passenger Safety",
          content: "Every cab is equipped with a panic button accessible to passengers, which signals the Control Room in any emergency."
        },
        {
          title: "Real-Time GPS Tracking",
          content: "GPS tracking is installed in each cab, allowing precise location tracking and facilitating immediate dispatch of backup assistance when needed."
        }
      ]
    },
    {
      title: "Crisis Management",
      iconSrc: "/safety.svg",
      subItems: [
        {
          title: "Reliable Backup Fleet",
          content: "A sufficient backup fleet is always on standby to address any emergencies or unexpected requirements."
        },
        {
          title: "Rapid Deployment Capacity",
          content: "CTTPL can mobilize up to 25 vehicles with four site supervisors or managers within a 12-hour notice and up to 100 vehicles within 15 days."
        },
        {
          title: "Experienced Operations Team",
          content: "Our skilled and dedicated team ensures seamless business operations and continuity, expertly handling all logistics."
        },
        {
          title: "24/7 Central Control Room Monitoring",
          content: "The Control Room actively monitors traffic conditions, including roadblocks, VIP movements, and congestion, for efficient route management."
        },
        {
          title: "City-Savvy Staff and Drivers",
          content: "All drivers and operational staff are thoroughly familiar with each city, capable of quickly adjusting routes as needed to avoid delays."
        }
      ]
    }
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
    // Reset all expanded sub-items when switching main categories
    setExpandedSubItems({});
  };

  const handleSubItemToggle = (subIndex) => {
    const key = `${activeIndex}-${subIndex}`;
    const isCurrentlyExpanded = expandedSubItems[key] || false;
    
    if (isCurrentlyExpanded) {
      // If currently expanded, close it
      setExpandedSubItems({});
    } else {
      // If not expanded, close all others and open this one
      setExpandedSubItems({ [key]: true });
    }
  };

  const isSubItemExpanded = (subIndex) => {
    const key = `${activeIndex}-${subIndex}`;
    return expandedSubItems[key] || false;
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
    <div className="min-h-screen bg-white mt-8">
      <div className="mx-4 py-6 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:gap-16">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3">
            <h1 className="mb-6 text-4xl font-semibold text-right sm:text-5xl lg:mb-8">
              <span className="text-red-500">Safety</span><br />
              <span className="text-black">Measures</span>
            </h1>
            <div className="relative">
              {/* Vertical connecting line with progress effect */}
              <div className="absolute right-2.5 top-3.5 bottom-0 w-0.5">
                <div className="absolute inset-0 bg-gray-300"></div>
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

          {/* Right Content - Show only selected item's sub-questions with accordion behavior */}
          <div className="w-full lg:w-2/3 lg:pl-8">
            {activeIndex >= 0 && activeIndex < safetyItems.length && (
              <div className="border border-gray-200 rounded-lg p-6">
                {/* Main item header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-gray-400 bg-white">
                    <img
                      src={safetyItems[activeIndex].iconSrc}
                      alt={`${safetyItems[activeIndex].title} icon`}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{safetyItems[activeIndex].title}</h3>
                </div>
                
                {/* Sub-items with accordion behavior */}
                <div className="space-y-0 border-t">
                  {safetyItems[activeIndex].subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => handleSubItemToggle(subIndex)}
                        className="flex w-full items-center justify-between py-4 text-left transition-colors duration-200 hover:bg-gray-50"
                      >
                        <h4 className="font-semibold text-lg text-gray-900 pr-4">
                          {subItem.title}
                        </h4>
                        <div className="flex h-6 w-6 items-center justify-center">
                          {isSubItemExpanded(subIndex) ? (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          ) : (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          )}
                        </div>
                      </button>
                      {isSubItemExpanded(subIndex) && (
                        <div className="pb-4 pr-8 animate-in slide-in-from-top-2 duration-200">
                          <p className="text-gray-600 leading-relaxed text-base">
                            {subItem.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMeasures;
