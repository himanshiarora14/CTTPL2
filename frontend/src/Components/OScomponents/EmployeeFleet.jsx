import React from 'react';
import CompanyOverView from '../CompanyOverView';
import Choice from "../Bestchoice";
import OnSpotRentalsForm from '../Booking';
import Getintouch from "../Getintouch";
import Footer from "../Footer";
import { CheckCircleIcon } from '@heroicons/react/24/solid'; 

function EmployeeFleet() {
    return (
       <div>
        
        <br />
        <br />

         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Services, <span className="text-[#e74c3c]">One Need</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              At Choudhary Tours & Travels Pvt. Ltd. (CTTPPL), we have been a trusted name in the industry for over 35 years, offering comprehensive nationwide services in tours, cabs, and fleet management. Whether you're looking for safe and reliable corporate transportation, customizable tour packages, or efficient fleet solutions, our vast experience and cutting-edge technology ensure smooth and hassle-free journeys. With a fleet strength of 4,000+ vehicles, we provide top-notch service tailored to meet the unique needs of businesses and individuals alike.
            </p>
         </div>

         
         <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900">
                    Employee <span className="text-red-500">Transport Services</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800">
                    <div>
                        <p>
                          Reliable and efficient employee transport services designed to ensure hassle-free commutes for your workforce. With a dedicated fleet of 4,000+ vehicles, advanced route optimization, and real-time tracking, we prioritize safety, punctuality, and comfort.
                        </p>
                    </div>
                    <div>
                        <p>
                          Operating across 8 major cities, we provide tailored solutions to enhance employee satisfaction and productivity.
                        </p>
                    </div>
                </div>
            </div>
         </div>

        
         <div className="w-full bg-[#0A283A] py-16 px-6 lg:px-20 text-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Best Ever <span className="text-red-500">Employee Transport Services</span>
              </h2>

              <p className="mb-6">
                <span className="font-semibold">Our Motto</span> - "Your Workforce, Our Priority—On Time, Every Time."  
                CTTPPL is committed to providing the best employee transportation services that prioritize time, comfort, safe, reliability, and convenience. Understanding the value of a smooth and stress-free commute, we offer tailored transportation solutions designed to meet the needs of your workforce.
              </p>

              <p className="mb-6">
                As one of India’s largest and most respected corporate employee transportation providers, we take pride in offering rides that are cost-effective, safe, secure, and comfortable. With over three and a half decades of experience, we have accomplished numerous milestones and consistently upheld nearly 100% client retention, thanks to the exceptional quality of our Employee Transportation Services.
              </p>

              
              <ul className="space-y-3">
                {[
                  "PAN India presence.",
                  "An ISO 9001:2015 Certified Company.",
                  "More than 200+ satisfied customers across the nation.",
                  "4000+ Fleet Strength Nationwide.",
                  "We cherish the clients we have built since 1990.",
                  "200+ highly motivated team of professionals.",
                  "Advanced technology & AI to elevate safety standards and maximize productivity."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
         </div>

         {/* Other Components */}
         <Choice/>
         <OnSpotRentalsForm/>
         <Getintouch />
         <Footer/>
       </div>
    );
}

export default EmployeeFleet;
