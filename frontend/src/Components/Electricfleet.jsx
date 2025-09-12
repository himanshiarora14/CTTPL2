import React from "react"; 

const FleetCard = () => {
  return (
    <div className="w-full bg-[#1a202c] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-[#1a202c] rounded-lg shadow-md p-6 md:p-10">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">
          Electric <span className="text-red-500">Fleet</span>
        </h2>

        {/* Two-column content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left section */}
          <div className="flex items-start space-x-3">
            <p>
              Sustainable transport solutions with our electric fleet, promoting
              eco-friendly travel options for businesses and communities.
            </p>
          </div>

          {/* Right section */}
          <div className="flex items-start space-x-3">
            <p>
              Emissions-free vehicles and cost-effective operation make this
              service ideal for organizations looking to reduce their carbon
              footprint and embrace green mobility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
