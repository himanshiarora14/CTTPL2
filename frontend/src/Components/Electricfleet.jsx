import React from "react";

const services = [
  {
    title: "Electric Fleet",
    highlight: "Fleet",
    leftText:
      "Sustainable transport solutions with our electric fleet, promoting eco-friendly travel options for businesses and communities.",
    rightText:
      "Emissions-free vehicles and cost-effective operation make this service ideal for organizations looking to reduce their carbon footprint and embrace green mobility.",
  },
  {
    title: "Car Leasing",
    highlight: "Services",
    leftText:
      "Flexible car leasing options that cater to diverse needs, of a specific end user, providing well-maintained and all category of vehicles for both short and long-term use.",
    rightText: "",
  },
  {
    title: "Dedicated Fleet",
    highlight: "Services",
    leftText:
      "Customized fleet services for businesses, offering dedicated vehicles to meet the unique transportation demands of each client.",
    rightText: "",
  },
  {
    title: "School Fleet",
    highlight: "Services",
    leftText:
      "Reliable and child-friendly transportation for schools, ensuring the safety and punctuality of each ride.",
    rightText:
      "Our dedicated fleet is equipped with security features and driven by experienced professionals, providing peace of mind to parents and school administrators alike.",
  },
  {
    title: "Employee Transport",
    highlight: "Services",
    leftText:
      "Safe and punctual transportation solutions designed for employees, ensuring a comfortable and efficient commute every day.",
    rightText: "",
  },
];

const FleetSection = () => {
  return (
    <div className="w-full bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 space-y-12">
      {services.map((service, index) => (
        <div
          key={index}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200"
        >
          {/* Title */}
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            {service.title.split(" ")[0]}{" "}
            <span className="text-red-500">{service.highlight}</span>
          </h2>

          {/* Two-column content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800">
            <div>
              <p>{service.leftText}</p>
            </div>
            {service.rightText && (
              <div>
                <p>{service.rightText}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FleetSection;
