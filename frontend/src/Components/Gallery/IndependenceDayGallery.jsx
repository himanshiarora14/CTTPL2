import React from 'react';
import img1 from '../../images/Gallery/b1.jpg'
import img2 from '../../images/Gallery/b2.jpg'
import img3 from '../../images/Gallery/b3.jpg'
import img4 from '../../images/Gallery/b4.jpg'
import img5 from '../../images/Gallery/b5.jpg'
import img6 from '../../images/Gallery/b6.jpg'
import img7 from '../../images/Gallery/b7.jpg'
import img8 from '../../images/Gallery/b8.jpg'


const IndependenceDayGallery = ({
  title = "Independence Day 2025",
  images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
  ],
}) => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 px-2 md:px-0 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 h-auto md:h-[900px]"> 
          <div className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[0]}
              alt="Independence Day group celebration"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[1]}
              alt="Independence Day small group"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[2]}
              alt="Independence Day participant"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[3]}
              alt="Speaker at Independence Day event"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-3 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[4]}
              alt="Large group at Independence Day event"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[5]}
              alt="Group photo with Indian flag"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[6]}
              alt="Two men at Independence Day event"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-3 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[7]}
              alt="Large group celebrating Independence Day"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndependenceDayGallery;