import React from "react";
import img from '../../images/team/leadership.png'
import { HiArrowRight } from "react-icons/hi";

function CompanyStructure() {
  return (
    <div className="min-h-screen py-12 px-4 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 mb-12 items-stretch">

        <div className="flex-1 flex">
          <img
            src={img}
            alt="Bus"
            className="rounded-xl w-full h-auto object-cover" 
          />
        </div>

        <div className="flex-1 flex flex-col justify-center h-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            Company <span className="text-red-500">Structure</span> & Leadership
          </h2>
          <p className="mb-8 text-md">
            At CTTPL, our strength lies in a well-defined organizational structure
            backed by experienced leaders and specialized teams. From operations
            and safety to client servicing and technology, every department works
            seamlessly to deliver safe, reliable, and efficient transport solutions.
          </p>
          <p className="text-gray-700">
            Our decentralized yet connected structure allows us to stay agile while
            maintaining consistency across regions. With dedicated regional hubs,
            centralized fleet management, and a strong support system, we ensure
            smooth coordination nationwide. This balance of autonomy and oversight
            enables CTTPL to adapt quickly to client needs while upholding the
            highest standards of service and safety.
          </p>


          <div className="flex items-center gap-3 mt-8">
            <a href="/structure" className="flex items-center">
              <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-red-600 transition duration-300 flex items-center">
                Know More
              </button>
              <button className="bg-red-500 text-white font-semibold ml-3 p-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center">
                <HiArrowRight className="text-white text-lg" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyStructure;