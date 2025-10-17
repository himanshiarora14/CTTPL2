import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const FleetBestChoice = () => {
  // Data arrays for clean, scalable code using map method
  const compliancePoints = [
    "A dedicated compliance team conducts regular inspections of vehicles and chauffeurs, focusing on cleanliness, sanitization, proper uniform, roadworthiness, and adherence to statutory requirements.",
    "Our team proactively manages and maintains vehicle compliance-related documentation.",
    "A well-structured process ensures timely routine maintenance checks, with all records consistently updated.",
    "All statutory compliance documents are always prepared and readily available for client review and audits."
  ];

  const chauffeurPoints = [
    "Chauffeur background verification is conducted through third-party agencies like \"Verifact,\" \"Co-Achieve,\" and \"AuthBridge.\"",
    "A one-week induction training program is provided for all newly recruited chauffeurs by experienced trainers.",
    "Complete records, including police verification, are maintained for every chauffeur.",
    "Regular counselling sessions are held to address chauffeur concerns and resolve issues proactively.",
    " Incentive programs are implemented to motivate chauffeurs and encourage high performance."
  ];

  const listContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -50, opacity: 0 }, 
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring', 
        stiffness: 90,
      },
    },
  };

  const BulletPoint = ({ text }) => (
    <motion.li variants={listItemVariants} className="flex items-start mb-4">
      <div className="flex-shrink-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#EC221F] rotate-90 mt-2 mr-4"></div>
      <span className="text-gray-700 text-sm lg:text-base leading-relaxed flex-1">
        {text}
      </span>
    </motion.li>
  );

  const Section = ({ points, bgColor }) => (
    <div className={`${bgColor} rounded-2xl p-6 lg:p-8 relative h-full`}>
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#EC221F] rounded-r"></div>

      <div className="ml-6">
        <motion.ul
          className="space-y-4"
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          {points.map((point, index) => (
            <BulletPoint key={index} text={point} />
          ))}
        </motion.ul>
      </div>
    </div>
  );

  const SectionHeading = ({ title, titleHighlight }) => (
    <h3 className="text-xl lg:text-2xl font-bold mb-6 text-center">
      <span className="block">
        Ensuring <span className="text-[#EC221F]">{titleHighlight}</span>
      </span>
      <span className="block">{title}</span>
    </h3>
  );

  return (
    <div className="w-full bg-white px-10 py-8 lg:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6">
            What Makes <span className="text-[#EC221F]">CTTPL</span> Your Best Choice?
          </h1>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed max-w-6xl mx-auto">
            Choudhary Tours & Travels Pvt. Ltd. (CTTPL) has proudly served over 100,000 satisfied end users across the nation, conducting
            10,000+ tours and trips with an impressive fleet strength of 4,000+ vehicles. Choose Choudhary Tours & Travels Pvt. Ltd. (CTTPL)
            for dependable, customer-focused transport solutions that blend safety, technology, and innovation with cost efficiency. Our
            commitment to professionalism and continuous improvement ensures unmatched service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col">
            <SectionHeading
              title="and Audits"
              titleHighlight="Quality Compliance"
            />
            <Section points={compliancePoints} bgColor="bg-[#FBF3E4]" />
          </div>

          <div className="flex flex-col">
            <SectionHeading
              title="Management"
              titleHighlight="Chauffeur"
            />
            <Section points={chauffeurPoints} bgColor="bg-[#FBF3E4]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetBestChoice;