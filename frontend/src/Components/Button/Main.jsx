// Main.jsx
import React from "react";
import Contact from "../Button/Contact";
import Embedded from "../Button/Embedded";

const Main = ({ embedded, heading, paragraph, image }) => {
  return (
    <div className="bg-white md:py-16 overflow-hidden">
      <div className="w-full lg:flex items-center relative bg-[#B8DDD9]/16 overflow-visible max-md:p-4 md:gap-4 lg:gap-4 xl:gap-4">

        {/* Left Section */}
        <div className="relative z-10  lg:w-1/2 md:pr-6 p-10 md:pl-16 lg:pl-20 xl:pl-24">
          <div className="absolute inset-0 md:w-[200vw] left-0 lg:left-auto lg:right-0 -z-10"></div>


          <Embedded text={embedded} />
          <h1 className="text-5xl font-semibold mb-4 pb-2">{heading}</h1>
          <div className="md:w-110">
            <p className="text-md  text-gray-700 mb-6">{paragraph}</p>
          </div>

          <Contact />
        </div>

        <div className="lg:w-1/2 mt-8 md:mt-0 relative z-20 max-md:m-6 -my-8 md:-my-10 lg:-my-12 xl:-my-2">
          <div className="lg:transform lg:scale-110 xl:scale-115 2xl:scale-100 lg:origin-left transition-transform duration-300 overflow-hidden rounded-lg max-w-full">
            <img
              src={image}
              alt={typeof heading === "string" ? heading : "Landing image"}
              className="shadow-lg rounded-2xl w-[70vh] h-auto max-h-[64vh]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Main;
