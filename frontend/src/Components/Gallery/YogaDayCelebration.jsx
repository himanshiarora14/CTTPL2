import React from 'react';

// Replace these with the actual paths to your 5 images
import img1 from '../../images/Gallery/C1.jpg';
import img2 from '../../images/Gallery/C2.jpg';
import img3 from '../../images/Gallery/C3.jpg';
import img4 from '../../images/Gallery/C4.jpg';
import img5 from '../../images/Gallery/C5.jpg';

const YogaDayCelebration = ({
  title = "Yoga day celebration",
  images = [img1, img5, img3, img4, img2],
}) => {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          {title}
        </h2>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[0]}
                alt="Yoga event 1"
                className="w-full h-64 md:h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[1]}
                alt="Yoga event 2"
                className="w-full h-64 md:h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[2]}
                alt="Yoga event 3"
                className="w-full h-64 md:h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[3]}
                alt="Yoga event 4"
                className="w-full h-64 md:h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Image */}
        <div className="mt-4 group rounded-2xl overflow-hidden shadow-lg">
          <img
            src={images[4]}
            alt="Yoga event 5"
            className="w-full h-72 md:h-96 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default YogaDayCelebration;
