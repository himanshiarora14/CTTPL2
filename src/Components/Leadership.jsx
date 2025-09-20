import React from "react";

function CompanyStructure() {
  return (
    <div className="min-h-screen py-12 px-4 bg-white flex flex-col items-center">
      {/* Structure Section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 mb-12 items-stretch">
        
        {/* Image */}
        <div className="flex-1 flex">
          <img
            src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
            alt="Bus"
            className="rounded-xl w-full h-90 object-cover" // 👈 fixed height to match text
          />
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col justify-center h-90 pt-6">
          <h2 className="text-4xl font-bold mb-2">
            Company <span className="text-red-500">Structure</span> & Leadership
          </h2>
          <p className="mb-2 text-gray-700">
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

          <div className="flex items-center space-x-3 mt-4">
            <a href="/structure">
              <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-red-600 transition duration-300">
                Know More
              </button>
            </a>
            <button className="bg-red-500 text-white font-semibold p-2 rounded-full hover:bg-red-600 transition duration-300">
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
        </div>
      </div>
    </div>
  );
}

export default CompanyStructure;
