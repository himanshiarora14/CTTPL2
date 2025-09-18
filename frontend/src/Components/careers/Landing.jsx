import React from 'react';
import { IoCall } from "react-icons/io5";
import Embedded from '../Button/Embedded';
import Contact from '../Button/Contact';

const GrowWithUs = () => {
  return (
    <section className="bg-[#f2f8f8]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-8 pt-6 py-8 md:py-8">

        <div className="lg:w-1/2 md:max-w-100 md:mr-8 md:ml-14 text-center mt-4 lg:text-left">

          <Embedded text={"Powered by People"} />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-8 leading-tight">
            <span className="text-red-600">Grow</span> with Us &
            <br />
            Move with Us
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
            At CTTPL, we believe our people drive our success. Be part of a culture built on integrity, innovation, and growth-where every role contributes to keeping India moving.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Contact />
          </div>


        </div>

        <div className="lg:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
            alt="A team of professionals collaborating in a modern office"
            className="w-full h-full max-h-[400px] rounded-lg object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GrowWithUs;