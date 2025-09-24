// src/components/Team.jsx

import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Make sure to run: npm install react-icons

// You can replace this with your actual team data
const teamMembers = [
  {
    name: "Mr. P.S. Choudhary",
    title: "Founder and Chairman",
    imageUrl: null, 
  },
  {
    name: "Mr. Sandeep Choudhary",
    title: "Managing Director",
    imageUrl: null,
  },
  {
    name: "Mr. Rajeev Choudhary",
    title: "Chief Executive Officer",
    imageUrl: null,
  },
  {
    name: "Mr. Chandradeep Tamta",
    title: "Chief Operating Officer",
    imageUrl: null,
  },
  {
    name: "Col. Ashok Prabhakar",
    title: "Chief Training Officer",
    imageUrl: null,
  },
  {
    name: "Mr. Amit Tomar",
    title: "CBO and Director - Operations",
    imageUrl: null,
  },
  {
    name: "Anju Choudhary",
    title: "Chief Financial Officer",
    imageUrl: null,
  }
];

const Team = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Valuable <span className="text-red-600">Team</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            At CTTPL, we believe our people drive our success. We've built more
            than just a trusted transport network—we've built a family of
            passionate professionals committed to safety, innovation, and
            excellence. From frontline drivers to our corporate teams, every
            individual plays a vital role in keeping India moving.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-10">
          {teamMembers.map((member, index) => (
            // The Team Member Card is now directly inside the map function
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image Placeholder */}
              <div className="w-40 h-40 bg-gray-200 rounded-lg mb-4 shadow-md">
                {member.imageUrl && (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Member Info */}
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;