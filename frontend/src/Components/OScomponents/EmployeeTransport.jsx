import React from "react";
import image from "../../images/image.png";

const EmployeeTransport = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-10 px-6 md:px-16 py-16 bg-white">
      {/* Left - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
       <img
  src={image}
  alt="Employee Transport Bus"
  className="w-full max-w-[500px] max-h-[350px] object-contain rounded-2xl"
/>


      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-red-600">Employee</span> Transport Services
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-gray-700 leading-relaxed">
            Our Motto -{" "}
            <span className="italic">
              "Your Workforce, Our Priority - On Time, Every Time."
            </span>{" "}
            CTTPL is committed to providing the best employee transportation
            services that prioritize time, comfort, safe, reliability, and
            convenience. Understanding the value of a smooth and stress-free
            commute, we offer tailored transportation solutions designed to
            meet the needs of your workforce.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As one of India’s largest and most respected corporate employee
            transportation providers, we take pride in offering rides that are
            cost-effective, safe, secure, and comfortable. With over three and
            a half decades of experience, we have accomplished numerous
            milestones and consistently upheld nearly 100% client retention,
            thanks to the exceptional quality of our Employee Transportation
            Services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTransport;
