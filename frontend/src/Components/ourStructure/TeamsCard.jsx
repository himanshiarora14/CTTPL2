import React from "react";
import { LuBus } from "react-icons/lu";

const teams = [
  {
    title: "Executive Team",
    description:
      "At CTTPL, our senior management team is composed of highly skilled professionals who lead the company with a clear vision and a commitment to excellence. Each member of the senior management team plays a crucial role in steering the company towards its strategic goals, ensuring that we consistently deliver value to our customers and stakeholders.",
  },
  {
    title: "Operations Team",
    description:
      "The operations team exemplary managing day-to-day activities such as scheduling, route planning, and efficient service delivery. They ensure that services are delivered on time, optimizing resources, monitoring resources, and troubleshooting any operational issues. Their focus on precision, coordination, and operational excellence ensures that we provide top-notch service to our customers every time.",
  },
  {
    title: "Human Resources Team",
    description:
      "The human resources team is building and maintaining a motivated, skilled, and compliant workforce. Their commitment to employment, growth, engagement, development, and well-being directly contributes to the company's success, helping us deliver the highest quality transport services to our customers. By fostering a supportive and collaborative work environment, the HR team ensures that our employees are empowered to perform at their best, supporting our mission of excellence in the transport industry.",
  },
  {
    title: "Growth Team",
    description:
      "The Strategic Business Development Team is dedicated to identifying new opportunities, driving innovation, and ensuring sustainable growth. Their expertise in market analysis, client acquisition, and partnership building has positioned the company for continued success in the transport industry by protecting, addressing market demands, and fostering long-term relationships. The team ensures that we are always a step ahead, delivering high-quality solutions that meet the time-evolving needs of our customers.",
  },
  {
    title: "Accounts Team",
    description:
      "Finance and Accounts team is responsible for ensuring that the company's finances are handled efficiently, accurately, and in compliance with all relevant regulations. This team supports decision-making, drives cost-effective strategies, and helps ensure the long-term profitability and financial stability of the business.",
  },
  {
    title: "Client Relationship Team",
    description:
      "The Client Relationship team is delivering a personalized, customer-first approach. By focusing on understanding client needs, managing expectations, revolving issues, and ensuring continual satisfaction, they have built strong, lasting relationships that are the foundation of our business. This commitment to providing acceptable customer service ensures that CTTPL remains a trusted partner for all our client transport needs.",
  },
  {
    title: "Administration Team",
    description:
      "They manage the day-to-day administrative functions, including office management, resource occupation, and compliance with policies. They ensure that operations run smoothly and efficiently.",
  },
  {
    title: "Customer Support Team",
    description:
      "The Customer Support Team is dedicated to providing exceptional service and ensuring a positive experience for every client. Their commitment to answering inquiries, resolving issues, and offering continuous support makes them an integral part of our company's success. They act as a bridge between our clients and our operations, ensuring that all concerns are addressed quickly and efficiently.",
  },
  {
    title: "Vigilance Team",
    description:
      "The Vigilance Team is maintaining the highest standards of safety, security, and ethical conduct by regular audits and assessment in all our operations. By ensuring a secure, compliant, and ethically sound environment, the Vigilance Team supports our commitment to delivering safe, reliable, and trustworthy transport services.",
  },
  {
    title: "Training Team",
    description:
      "Develops and implements training programs for employees, particularly drivers, focusing on safety, efficiency, and service excellence.",
  },
  {
    title: "Maintenance Team",
    description:
      "Maintenance team oversees the maintenance, condition, and performance of the company's vehicles. Their responsibility is to ensure that all vehicles are regularly serviced, compliant with safety standards, and ready for operation, minimizing the risk of breakdowns and delays. By ensuring that all vehicles are in optimal working order, they contribute significantly to the company's reputation for reliability and customer trust.",
  },
  {
    title: "Central Control Room",
    description:
      "Serves as the nerve center for operations, monitoring all activities in real-time. They specialize in integrating cutting-edge technologies like GPS tracking, route optimization software, and automated scheduling systems. They coordinate communication among teams, ensuring efficient response to any situation and enhancing overall safety.",
  },
  {
    title: "Chauffeurs Team",
    description:
      "Trained professionals dedicated to providing safe and reliable transportation services, their commitment to safety, punctuality, and professionalism ensure that every journey is a positive experience by representing the company with courtesy and expert diving skills reflects CTTPL's commitment to a quality service.",
  },
];

const TeamsSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-16">
      {/* 🔷 Teams Grid - Always 2 columns on desktop */}
      <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {teams.map((team, index) => (
          <div
            key={index}
            className="w-full rounded-xl p-6 transition-all duration-300 shadow-lg bg-[#FBF3E4] hover:bg-[#0A283A] text-black hover:text-white group"
          >
            {/* Icon and Title Container */}
            <div className="flex items-center gap-3 mb-4">
              {/* SVG Icon */}
              <div className="w-10 h-10 rounded-lg text-2xl flex items-center justify-center flex-shrink-0 bg-red-500 group-hover:bg-yellow-500 group-hover:text-blue-900 text-white">
                <LuBus />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold leading-tight text-black group-hover:text-white">
                {team.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-black group-hover:text-white">
              {team.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default TeamsSection;
