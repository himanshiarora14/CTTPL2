import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { jobData, cities } from './Jobdata'; // Import your data

const CurrentOpenings = () => {
  // State to track the currently selected city tab
  const [activeCity, setActiveCity] = useState('noida');

  // Get the jobs for the currently active city
  const activeJobs = jobData[activeCity] || [];

  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Current <span className="text-red-500">Openings</span>
        </h2>

        {/* City Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 border border-gray-300 rounded-full p-1.5 overflow-x-auto">
            {cities.map((city) => {
              const cityKey = city.toLowerCase();
              return (
                <button
                  key={cityKey}
                  onClick={() => setActiveCity(cityKey)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                    activeCity === cityKey
                      ? 'bg-red-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-4xl mx-auto">
          {activeJobs.length > 0 ? (
            <div className="space-y-4">
              {activeJobs.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-gray-200 last:border-b-0"
                >
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-gray-500 mt-1">
                      {job.type} • {job.location}
                    </p>
                  </div>
                  <button className="bg-red-500 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-red-600 transition-colors duration-300 shadow-sm">
                    View Details
                    <div className='bg-white text-red-500 p-2 rounded'> <FaArrowRight /> </div>
                    
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No current openings for this location.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;