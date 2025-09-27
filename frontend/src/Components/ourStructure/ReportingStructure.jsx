import React from 'react';

const Embedded = ({ text }) => (
  <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold text-gray-600 mb-4">
    {text}
  </div>
);

const ReportingStructure = () => {
  const steps = [
    { id: '01', title: 'Chauffeurs' },
    { id: '02', title: 'Operation Supervisor' },
    { id: '03', title: 'Operations Manager' },
    { id: '04', title: 'GM-Operations' },
    { id: '05', title: 'Director-Operations' },
    { id: '06', title: 'CEO' },
    { id: '07', title: 'Managing Director' }
  ];

  const topRow = steps.slice(0, 3);
  const bottomRow = steps.slice(3).reverse();

  return (
    <div className='bg-[#F4FAF9] w-full py-16 md:py-24'>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <Embedded text={"KEY PERFORMANCE INDICATOR"} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Reporting <span className="text-[#EC221F]">Structure</span>
          </h1>
        </div>

        {/* This container holds the desktop version of the diagram */}
        <div className="hidden md:block relative">
          
          {/* === Connecting Lines === */}
          {/* These three divs create the entire line shape */}

          {/* 1. Top Horizontal Line (connects 01, 02, 03) */}
          <div
            className="absolute top-6 left-6 right-6 h-[2px] bg-[#EC221F]"
            aria-hidden="true"
          />
          {/* 2. Right Vertical Line (drops down from the right) */}
          <div
            className="absolute top-6 right-6 w-[2px] h-28 bg-[#EC221F]"
            aria-hidden="true"
          />
          {/* 3. Middle Horizontal Line (connects back to the left) */}
          <div
            className="absolute top-[8.5rem] left-6 right-6 h-[2px] bg-[#EC221F]"
            aria-hidden="true"
          />

          {/* === Rows of Items === */}

          {/* Top Row */}
          <div className="flex justify-between mb-28">
            {topRow.map(step => (
              // The bg-color and z-index ensure the item sits cleanly on top of the line
              <div key={step.id} className="z-10 flex flex-col items-center text-center bg-[#F4FAF9] px-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md bg-[#EC221F]">
                  {step.id}
                </div>
                <p className="mt-3 font-semibold text-gray-800 text-sm">{step.title}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row (No connecting lines) */}
          <div className="flex justify-between">
            {bottomRow.map(step => (
              <div key={step.id} className="z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md bg-[#EC221F]">
                  {step.id}
                </div>
                <p className="mt-3 font-semibold text-gray-800 text-sm">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingStructure;