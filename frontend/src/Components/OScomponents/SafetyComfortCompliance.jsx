import React from "react";
import { FaCarSide, FaBusAlt, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaCarSide size={20} />,
    title: "Safety and Flexibility",
    description:
      "At CTTPL, safety is our top priority, with stringent compliance and real-time monitoring ensuring secure transportation. Our flexible solutions are tailored to meet the dynamic needs of businesses, providing reliable and efficient service every time.",
  },
  {
    icon: <FaCarSide size={20} />,
    title: "PAN India Reach",
    description:
      "CTTPL offers extensive Pan India reach, providing reliable transportation services across major cities. With a fleet of 4,000+ vehicles, we ensure seamless operations in locations like Noida, Gurugram, Chennai, Bengaluru, and more.",
  },
  {
    icon: <FaBusAlt size={20} />,
    title: "An ISO 9001:2015",
    description:
      "CTTPL is an ISO 9001:2015 certified company, reflecting our commitment to delivering the highest standards of quality in employee transportation services. This certification ensures efficient processes and continuous improvement across all operations.",
  },
  {
    icon: <FaCarSide size={20} />,
    title: "Technology and AI",
    description:
      "CTTPL leverages cutting-edge technology and AI to optimize routes, enhance efficiency, and ensure real-time tracking for superior service. Our tech-driven approach streamlines operations, providing seamless, safe, and punctual transportation solutions.",
  },
  {
    icon: <FaClock size={20} />,
    title: "24/7 Assistance",
    description:
      "CTTPL offers round-the-clock, top-notch support to ensure smooth and reliable transportation services at all times. Our dedicated team is always available to address any concerns, providing quick resolutions and ensuring customer satisfaction.",
  },
];

const SafetyComfortCompliance = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-[#f0f8fb]">
      {/* Top Section: Left Title + Right 2 Cards */}
      <div className="grid md:grid-cols-3 gap-6 items-start mb-6">
        {/* Left Side Title */}
        <div className="col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-left">
            <span className="text-red-600">Safety,</span>
            <br />
            Comfort,
            <br />
            Compliance
          </h2>
        </div>

        {/* Right Side - 2 Cards */}
        <div className="col-span-2 grid md:grid-cols-2 gap-6">
          {features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3"
            >
              <div className="text-slate-700 bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: 3 Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.slice(2).map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3"
          >
            <div className="text-slate-700 bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetyComfortCompliance;
