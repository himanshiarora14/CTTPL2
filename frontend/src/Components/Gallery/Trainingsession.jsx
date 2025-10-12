import React from 'react';
import img1 from '../../images/Gallery/D1.jpg';
import img2 from '../../images/Gallery/D2.jpg';
import img3 from '../../images/Gallery/D3.jpg';
import img4 from '../../images/Gallery/D4.jpg';

const Session= ({
  title = "Training session of supervisor",
  images = [img1, img3, img4, img2],
}) => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        <div className="flex flex-col gap-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[0]}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[1]}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[2]}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[3]}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Session;