import React from "react";
import image from "../../images/image.png";

const EmployeeTransport = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-10 px-6 md:px-16 py-16 bg-white">
      {/* Left - Image */}
      <div className="w-full md:w-1/2 self-stretch">
        <img
          src={image}
          alt="Employee Transport Bus"
          className="rounded-2xl shadow-lg w-full h-full object-cover max-h-[500px]"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between self-stretch">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-red-600">Employee</span> Transport Services
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our Motto -{" "}
              <span className="italic">
                "Your Workforce, Our Priority - On Time, Every Time."
              </span>{" "}
              CTTPL is committed to providing the best employee transportation
              services that prioritize time, comfort, safe, reliability, and
              convenience. Understanding the value of a smooth and stress-free
              commute, we offer tailored transportation solutions designed to meet
              the needs of your workforce.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As one of India’s largest and most respected corporate employee
              transportation providers, we take pride in offering rides that are
              cost-effective, safe, secure, and comfortable. With over three and a
              half decades of experience, we have accomplished numerous milestones
              and consistently upheld nearly 100% client retention, thanks to the
              exceptional quality of our Employee Transportation Services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTransport;
