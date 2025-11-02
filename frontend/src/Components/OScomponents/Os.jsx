import React from "react";
import { motion } from "framer-motion";
import img1 from "../../images/bus6.png";
import img2 from "../../images/team/fleets.png";
import img3 from "../../images/bus8.png";
import img4 from "../../images/bus9.png";
import img5 from "../../images/bus10.png";

const services = [
  {
    title: "Employee Transport Services",
    description:
      "Reliable and efficient employee transport services designed to ensure hassle-free commutes for your workforce. With a dedicated fleet and 24/7 assistance, we prioritize safety, punctuality, and comfort. Operating across major cities, we provide tailored solutions to enhance employee satisfaction and productivity.",
    img: img1,
    link: "/employee-transport-service",
  },
  {
    title: "Car Leasing Services",
    description:
      "CTTPL offers comprehensive car leasing services, providing businesses with a flexible and cost-efficient solution for long-term transportation needs. Whether you require compact cars or premium vehicles, we deliver well-maintained vehicles with customized leasing options for operations and reduced maintenance costs.",
    img: img3,
    link: "#",
  },
  {
    title: "Dedicated Fleet Services",
    description:
      "CTTPL’s Dedicated Fleet Services provide businesses with exclusive, fully-managed vehicles to meet their ongoing transportation demands. With customized solutions for your workforce, our services enhance reliability, flexibility, and cost efficiency. Backed by expert management, our dedicated fleet delivers superior service quality across industries.",
    img: img2,
    link: "#",
  },
  {
    title: "School Fleet Services",
    description:
      "CTTPL’s School Fleet Services ensure the safe and timely transportation of students, prioritizing their security and comfort at every step. Our trained staff and maintained vehicles provide peace of mind to parents and schools alike, ensuring a smooth and dependable daily commute for young learners.",
    img: img4,
    link: "/school-fleet-service",
  },
  {
    title: "Electric Fleet Services",
    description:
      "CTTPL’s Electric Fleet Services bring eco-friendly transportation solutions to your doorstep. With zero-emission vehicles and charging infrastructure, we help organizations achieve sustainability goals while maintaining efficiency and reliability. Our advanced electric fleet offers quieter, cleaner commutes, paving the way for a greener future.",
    img: img5,
    link: "/electric-fleet-service",
  },
];

export default function Os() {
  return (
    <section className="w-full py-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 px-4 sm:px-6 md:px-4">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 ${isReversed ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <motion.div
                className="w-full md:w-1/2 mb-4 md:mb-0"
                initial={{ x: isReversed ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  draggable={false}
                />
              </motion.div>


              {/* Content */}
              <motion.div
                className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-6"
                initial={{ x: isReversed ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase border-[#B8DDD9] border-2 px-3 py-1 rounded-md w-fit mb-2 sm:mb-4">
                  Our Services
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
                  <a href={service.link} className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-red-500 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-red-600 transition duration-300">
                      Know More
                    </button>
                  </a>

                  <button className="w-full sm:w-auto bg-red-500 text-white font-semibold p-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
