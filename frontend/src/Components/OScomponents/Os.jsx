import React from "react";
import bus2 from "../../images/bus2.png";

const services = [
  {
    title: "Employee Transport Services",
    description:
      "Reliable and efficient employee transport services designed to ensure hassle-free commutes for your workforce. With a dedicated fleet and 24/7 assistance, we prioritize safety, punctuality, and comfort. Operating across major cities, we provide tailored solutions to enhance employee satisfaction and productivity.",
    img: "/images/bus.png",
    link: "/employee-transport-service",
  },
  {
    title: "Car Leasing Services",
    description:
      "CTTPL offers comprehensive car leasing services, providing businesses with a flexible and cost-efficient solution for long-term transportation needs. Whether you require compact cars or premium vehicles, we deliver well-maintained vehicles with customized leasing options for operations and reduced maintenance costs.",
    img: "/images/bus.png",
    link: "#",
  },
  {
    title: "Dedicated Fleet Services",
    description:
      "CTTPL’s Dedicated Fleet Services provide businesses with exclusive, fully-managed vehicles to meet their ongoing transportation demands. With customized solutions for your workforce, our services enhance reliability, flexibility, and cost efficiency. Backed by expert management, our dedicated fleet delivers superior service quality across industries.",
    img: "/images/bus.png",
    link: "#",
  },
  {
    title: "School Fleet Services",
    description:
      "CTTPL’s School Fleet Services ensure the safe and timely transportation of students, prioritizing their security and comfort at every step. Our trained staff and maintained vehicles provide peace of mind to parents and schools alike, ensuring a smooth and dependable daily commute for young learners.",
    img: "/images/bus.png",
    link: "#",
  },
  {
    title: "Electric Fleet Services",
    description:
      "CTTPL’s Electric Fleet Services bring eco-friendly transportation solutions to your doorstep. With zero-emission vehicles and charging infrastructure, we help organizations achieve sustainability goals while maintaining efficiency and reliability. Our advanced electric fleet offers quieter, cleaner commutes, paving the way for a greener future.",
    img: "/images/bus.png",
    link: "/electric-fleet-service",
  },
];

export default function Os() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-6 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={bus2}
                alt={service.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase border px-3 py-1 rounded-full w-fit mb-3">
                Our Services
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.link}
                className="bg-red-500 text-white text-sm font-semibold py-2 px-5 rounded-md hover:bg-red-600 transition duration-300 w-fit"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
