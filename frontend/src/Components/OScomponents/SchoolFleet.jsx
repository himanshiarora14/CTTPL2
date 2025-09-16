import React from 'react';
import Getintouch from "../Getintouch";
import Footer from "../Footer";

function SchoolFleet() {
   return (
      <div>

         <div className="w-full bg-[#0d2c3b] flex items-center justify-center px-4 py-16">
            <div className="max-w-4xl text-center">
               <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                  School <span className="text-red-500">Fleet Services</span>
               </h1>
               <h2 className="text-lg sm:text-2xl font-bold text-[#f1c40f] mb-6">
                  Safe Journeys, Bright Futures.
               </h2>
               <p className="text-gray-200 max-w-2xl mx-auto">
                  CTTPL’s School Fleet Services ensure the safe and timely transportation of students, prioritizing their security and comfort at every step. Our well-maintained vehicles, trained drivers, and advanced safety features offer peace of mind to parents and schools alike. With a focus on reliability and care, we make daily commutes hassle-free for young learners.
               </p>
            </div>
            {/* School Fleet Services Section */}
            <div className="w-full bg-[#0d2c3b] py-16 px-6 lg:px-20">
               <div className="max-w-6xl mx-auto text-center text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                     School Fleet Services <span className="text-[#e74c3c]">@ CTTPPL</span>
                  </h2>
                  <p className="text-gray-300 max-w-4xl mx-auto mb-12">
                     At CTTPPL, we understand the importance of safe, reliable, and comfortable transportation for students.
                     Our School Fleet Services are designed to ensure seamless commutes for young learners, providing parents
                     and schools with peace of mind. With decades of experience in fleet management, we deliver solutions that
                     prioritize safety, efficiency, and punctuality, making us a trusted partner for educational institutions
                     across India.
                  </p>
               </div>

               {/* Cards */}
               <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                  {/* Box 1 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">🛡️</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Student Safety First
                     </h3>
                     <p className="text-gray-600 text-sm">
                        Safety is our top priority. Our vehicles are equipped with GPS tracking, speed limit monitoring, CCTV cameras,
                        and emergency response systems to ensure the security of every child.
                     </p>
                  </div>

                  {/* Box 2 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">👨‍✈️</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Trained & Verified Drivers
                     </h3>
                     <p className="text-gray-600 text-sm">
                        All our drivers undergo rigorous training in safety protocols and are thoroughly background-verified.
                        They are regularly counseled to uphold the highest standards of professionalism.
                     </p>
                  </div>

                  {/* Box 3 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">⏰</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Reliable & Punctual Services
                     </h3>
                     <p className="text-gray-600 text-sm">
                        We understand the importance of adhering to school schedules. Our fleet operations are meticulously
                        planned to ensure on-time pickups and drop-offs every day.
                     </p>
                  </div>

                  {/* Box 4 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">🔧</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Well-Maintained Vehicles
                     </h3>
                     <p className="text-gray-600 text-sm">
                        Each vehicle in our fleet undergoes regular maintenance checks to ensure optimal performance, cleanliness,
                        and roadworthiness.
                     </p>
                  </div>

                  {/* Box 5 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">📡</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Technology Integration
                     </h3>
                     <p className="text-gray-600 text-sm">
                        Advanced technology like real-time tracking allows parents and school authorities to monitor the fleet's
                        location, adding an extra layer of assurance.
                     </p>
                  </div>

                  {/* Box 6 */}
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                     <div className="text-4xl mb-4 text-[#0d2c3b]">⚙️</div>
                     <h3 className="font-semibold text-lg text-[#0d2c3b] mb-2">
                        Customizable Solutions
                     </h3>
                     <p className="text-gray-600 text-sm">
                        Our services are tailored to meet the unique transportation requirements of different schools, whether it’s
                        for daily commutes or special events.
                     </p>
                  </div>

               </div>
            </div>

         </div>
         <Getintouch />
      </div>
   );
}

export default SchoolFleet;
