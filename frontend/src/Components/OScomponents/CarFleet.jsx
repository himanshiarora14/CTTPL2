import React from 'react';
import CompanyOverView from '../CompanyOverView';
import Choice from "../Bestchoice";
import OnSpotRentalsForm from '../Booking';
import Getintouch from "../Getintouch";
import Footer from "../Footer";

function CarFleet() {
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
           
         </div>

        
         

         <Choice/>
                 
         <div className="w-full bg-white py-16 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto text-center">
                 <h1 className="text-6xl sm:text-6xl font-bold mb-6 text-blue-900">
                    Car <span className="text-red-500">Leasing Services</span>
                </h1>
               <h2 className="text-xl sm:text-3xl font-bold text-[#e74c3c] mb-4">
                  Now Lease With Ease At CTTPPL
               </h2>
               <p className="text-gray-700 max-w-3xl mx-auto mb-12">
                  At CTTPPL, we make car leasing simple and hassle-free. With flexible terms, a wide range of vehicles, and affordable rates, leasing a car has never been easier. Whether for business or personal use, our seamless process ensures you get the right car at the right price, with minimal effort.
               </p>
            </div>

            {/* Reach + Options */}
            <div className="bg-[#0A283A] text-white rounded-2xl shadow-lg p-8 mb-12">
               <h3 className="text-xl font-semibold mb-6">Reach + Options</h3>
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                     src=''
                     alt="Car leasing"
                     className="rounded-xl"
                  />
                  <p className="text-gray-200 leading-relaxed">
                     You can lease a self-drive car that suits your needs in states like Delhi, Uttar Pradesh, Haryana, Tamil Nadu, Karnataka, Telangana, Maharashtra, Madhya Pradesh, and more. Choose from a variety of models such as Swift, Innova, Crysta, Baleno, i10, i20, Etios, Creta, and others.
                  </p>
               </div>
            </div>

            {/* Tech + Support */}
            <div className="bg-[#0A283A] text-white rounded-2xl shadow-lg p-8">
               <h3 className="text-xl font-semibold mb-6">Tech + Support</h3>
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <p className="text-gray-200 leading-relaxed">
                     Assistance is available 24/7. Our team managing back-end operations at CTTPPL is always ready to address your queries and resolve any issues you encounter. We provide continuous support to our clients, and we’re even available to help navigate the complex streets of a new city or country.
                  </p>
                  <img
                     src=""
                     alt="Tech support"
                     className="rounded-xl"
                  />
               </div>
            </div>
         </div>

         <OnSpotRentalsForm/>
         <Getintouch />
         <Footer/>
       </div>
    );
}

export default CarFleet;
