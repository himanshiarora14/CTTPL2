import React from "react";

import img1 from '../../images/Gallery/restore 1.jpeg';
import img2 from '../../images/Gallery/restore 2.jpeg';

const OurFirstBuses = ({
  title = "Our First Buses",
  images = [img1, img2],
}) => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg group h-64">
            <img
              src={images[0]}
              alt="Historic CTTPL Bus"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg group h-64">
            <img
              src={images[1]}
              alt="Legacy Vehicle of CTTPL"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFirstBuses;
