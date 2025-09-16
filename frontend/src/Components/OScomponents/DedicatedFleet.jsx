import React from 'react';
import CompanyOverView from '../CompanyOverView';
import Choice from "../Bestchoice";
import OnSpotRentalsForm from '../Booking';
import Getintouch from "../Getintouch";
import Footer from "../Footer";
function DedicatedFleet() {
   return (
      <div>
         <br />

         <div className="w-full bg-[#0d2c3b] flex items-center justify-center px-4 py-16">
            <div className="max-w-4xl text-center">
               <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                  Dedicated <span className="text-red-500">Leasing Services</span>
               </h1>
               <h2 className="text-lg sm:text-2xl font-bold text-[#f1c40f] mb-6">
                  Our Exclusive Fleet, Tailored for Excellence.
               </h2>
               <p className="text-gray-200 max-w-2xl mx-auto">
                  CTTPL’s Dedicated Fleet Services provide businesses with exclusive, fully
                  managed vehicles to meet their unique transportation needs. With a focus
                  on reliability, flexibility, and cost-efficiency, we ensure seamless
                  operations for your workforce. Backed by cutting-edge technology and
                  expert management, our dedicated fleet delivers superior service quality
                  across India.
               </p>
            </div>
            {/* Dedicated Fleet Services Section */}
            <div className="w-full bg-[#0d2c3b] py-16 px-6 lg:px-20">
               <div className="max-w-6xl mx-auto text-center text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                     DEDICATED FLEET SERVICES <span className="text-[#e74c3c]">@ CTTPPL</span>
                  </h2>
                  <p className="text-gray-300 max-w-4xl mx-auto mb-12">
                     Our Dedicated Fleet Services are built on a foundation of safety, flexibility, and cost-effectiveness. Each client is assigned a customized fleet, comprising vehicles that suit their exact requirements. From executive sedans to spacious buses, our fleet ensures the perfect balance of comfort, convenience, and performance.
                  </p>
               </div>

               {/* Cards */}
               <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                  {/* Box 1 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">🚌</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Customized Fleet Solutions
                     </h3>
                     <p className="text-gray-600 text-sm">
                        We tailor the fleet size and type to align with your business operations, ensuring optimized utilization and efficiency, proactively.
                     </p>
                  </div>

                  {/* Box 2 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">⚙️</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Advanced Tech-Integration
                     </h3>
                     <p className="text-gray-600 text-sm">
                        Real-time tracking, automated scheduling, and route optimization ensure hassle-free operations while keeping you informed at every step.
                     </p>
                  </div>

                  {/* Box 3 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">🤝</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Dedicated Support Team
                     </h3>
                     <p className="text-gray-600 text-sm">
                        A committed team is assigned to manage and monitor your fleet operations, ensuring smooth functioning with minimal disruptions.
                     </p>
                  </div>

                  {/* Box 4 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">💳</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Cost-Effective Solutions
                     </h3>
                     <p className="text-gray-600 text-sm">
                        By offering fixed pricing structures and optimized operations, we help you reduce transportation costs without compromising on quality.
                     </p>
                  </div>

                  {/* Box 5 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">🛡️</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Safety First
                     </h3>
                     <p className="text-gray-600 text-sm">
                        Equipped with GPS tracking and emergency support systems, our vehicles prioritize the safety of passengers.
                     </p>
                  </div>
               </div>
            </div>

         </div>



         <Getintouch />
      </div>
   );
}

export default DedicatedFleet;
