import React from 'react';

const Scc = () => {
  // Data array for clean, scalable code using map method
  const topCards = [
    {
      id: 'safety-flexibility',
      title: 'Safety and Flexibility',
      description: 'At CTTPL, safety is our top priority, with stringent compliance and real-time monitoring ensuring secure transportation. Our flexible solutions are tailored to meet the dynamic needs of businesses, providing reliable and efficient service every time.',
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      )
    },
    {
      id: 'pan-india-reach',
      title: 'PAN India Reach',
      description: 'CTTPL offers extensive Pan India reach, providing reliable transportation services across major cities. With a fleet of 4,000+ vehicles, we ensure seamless operations in locations like Noida, Gurugram, Chennai, Bengaluru, and more.',
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      )
    }
  ];

  const bottomCards = [
    {
      id: 'iso-certification',
      title: 'An ISO 9001:2015',
      description: 'CTTPL is an ISO 9001:2015 certified company, reflecting our commitment to delivering the highest standards of quality in employee transportation services. This certification ensures efficient processes and continuous improvement across all operations.',
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      id: 'technology-ai',
      title: 'Technology and AI',
      description: 'CTTPL leverages cutting-edge technology and AI to optimize routes, enhance efficiency, and ensure real-time tracking for superior service. Our tech-driven approach streamlines operations, providing seamless, safe, and punctual transportation solutions.',
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5zM12 7a5 5 0 0 1 5 5v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a5 5 0 0 1 5-5zm-2 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      )
    },
    {
      id: 'support-247',
      title: '24/7 Assistance',
      description: 'CTTPL offers round-the-clock, top-notch support to ensure smooth and reliable transportation services at all times. Our dedicated team is always available to address any concerns, providing quick resolutions and ensuring customer satisfaction.',
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  // Reusable Card Component for clean code
  const Card = ({ title, description, icon }) => (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm h-full">
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-600 rounded-full flex items-center justify-center mb-6 flex-shrink-0">
          {icon}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-semibold text-black mb-4">
            {title}
          </h3>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#F3F9F9] px-4 py-8 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Layout - Heading + Top Cards */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 mb-8 lg:mb-12">
          {/* Heading Section */}
          <div className="lg:flex-shrink-0 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
              <span className="text-[#EC221F]">Safety,</span>
              <br />
              <span className="text-black">Comfort,</span>
              <br />
              <span className="text-black">Compliance</span>
            </h2>
          </div>

          {/* Top Cards Grid - Right side of heading */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {topCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>

        {/* Bottom Cards - 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bottomCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scc;
