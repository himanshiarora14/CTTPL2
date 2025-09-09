import React from "react";

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
      {/* 🔷 Top Section */}
      <div className="bg-[#0b2d42] text-white text-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 rounded-lg">
        <h3 className="text-xs sm:text-sm uppercase tracking-wide font-medium text-gray-200">
          Hierarchy Is The Key To Adherence & Service Levels
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600 mt-2 sm:mt-3">
          Teams & Responsibilities
        </h2>
        <p className="mt-4 sm:mt-5 max-w-5xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100 px-2">
          At CTTPL, our teams and team members are recognized as one of the best
          in the nation. Each team is specialized in its area of expertise,
          bringing a wealth of knowledge, skills, and experience that contributes
          to the overall success of the business. Our commitment to ongoing
          training and development empowers our staff to excel in their roles,
          fostering a culture of excellence that is reflected in our service.
          This collective expertise allows the company to not only meet but
          exceed customer expectations, build long-term relationships, enhance
          operational efficiency, and drive business growth.
        </p>
      </div>

      {/* 🔷 Teams Grid - Always 2 columns on desktop */}
      <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {teams.map((team, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-between rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ring-1 ring-gray-200 hover:ring-gray-300 p-4 sm:p-5 lg:p-6 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-red-600 text-center mb-3 sm:mb-4">
              {team.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-5 sm:leading-6 text-justify flex-grow">
              {team.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsSection;
