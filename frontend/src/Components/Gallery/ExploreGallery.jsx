import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../images/Gallery/a1.jpg'
import img2 from '../../images/Gallery/b1.jpg'
import img3 from '../../images/Gallery/e2.jpg'
import img4 from '../../images/Gallery/d1.jpg'

const ExploreGallery = () => {
  const images = [
    img1,img2,img3,img4
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          Explore Our <span className="text-red-600">Gallery</span>
        </h2>

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-32 sm:h-40 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link
          to="/gallery"
          className="inline-block bg-[#EC221F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d11e1b] transition duration-200 shadow-md"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
};

export default ExploreGallery;
