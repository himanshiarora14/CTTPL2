import React from 'react';
import img1 from '../../images/Gallery/E1.jpg';
import img2 from '../../images/Gallery/E2.jpg';
import img3 from '../../images/Gallery/E3.jpg';
import img4 from '../../images/Gallery/E4.jpg';
import img5 from '../../images/Gallery/E5.jpg';

const NewCabsGallery = ({
    title = "NEW CABS",
    images = [img1, img2, img3, img4, img5],
}) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
                    {title}
                </h2>

                {/* Middle Row: Two images side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                        <img
                            src={images[1]}
                            alt="New Cabs Launch 2"
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="group rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                        <img
                            src={images[2]}
                            alt="New Cabs Launch 3"
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Bottom Row: Two images side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="group rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                        <img
                            src={images[3]}
                            alt="New Cabs Launch 4"
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="group rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                        <img
                            src={images[4]}
                            alt="New Cabs Launch 5"
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-4 gap-4">
                    {/* Top Large Image */}
                    <div className="group rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9 md:aspect-h-7">
                        <img
                            src={images[0]}
                            alt="New Cabs Launch 1"
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCabsGallery;