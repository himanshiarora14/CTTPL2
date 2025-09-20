import React from 'react';

// Replace these with the actual paths to your images
import image1 from '../../images/Gallery/a1.jpg'; // Whiteboard image (Assuming you still have 5 images total)
import image2 from '../../images/Gallery/a2.jpg'; // Top right cricket scene
import image3 from '../../images/Gallery/a3.jpg'; // Middle right cricket scene with people
import image4 from '../../images/Gallery/a4.jpg'; // Bottom left group standing on grass (this will be taller)
import image5 from '../../images/Gallery/a5.jpg'; // Bottom right man batting (this will be taller)

const FunTrainingGallery = ({
  title = 'Fun and Training Session Highlights',
  images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ],
}) => {

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 px-2 md:px-0 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 h-auto md:h-[800px]">
          <div className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[0]}
              alt="Training session with whiteboard"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-3 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[1]}
              alt="Outdoor cricket activity"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-3 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[4]}
              alt="Group enjoying cricket"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group"> {/* Increased row-span to 2 */}
            <img
              src={images[2]}
              alt="Team members gathered on turf"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group"> {/* Increased row-span to 2 */}
            <img
              src={images[3]}
              alt="Person batting during cricket"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunTrainingGallery;