// ExploreGallery.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import img1 from '../../images/Gallery/d4.jpg'
import img2 from '../../images/Gallery/b1.jpg'
import img3 from '../../images/Gallery/e2.jpg'
import img4 from '../../images/Gallery/d2.jpg'
import img5 from '../../images/Gallery/e4.jpg'

const images = [
  { src: img1, alt: "Passengers boarding a comfortable bus", caption: "Comfort & Safety" },
  { src: img2, alt: "Interior view with plush seats", caption: "Luxurious Interiors" },
  { src: img3, alt: "Group of travelers posing", caption: "Happy Travelers" },
  { src: img4, alt: "Fleet of vehicles parked", caption: "Our Modern Fleet" },
  { src: img5, alt: "Fleet of vehicles parked", caption: "Our Modern Fleet" },
];

export default function ExploreGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), []);

  // keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8 md:p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
                Life at <span className="text-red-600">CTTPL</span>
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl">
                Moments from our journeys — vehicles, passengers, and events.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-3 rounded-lg font-medium shadow-md hover:from-red-700 hover:to-red-600 transition"
              >
                View Full Gallery
              </Link>
              <a
                href="/quote"
                className="inline-flex items-center gap-2 border border-gray-200 px-4 py-3 rounded-lg text-gray-700 hover:shadow transition"
              >
                Book a Ride
              </a>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
            {/* Hero large tile on left for md+ */}
            <div
              className="relative col-span-2 sm:col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-[1.01]"
              style={{ minHeight: 260 }}
            >
              <button
                onClick={() => openLightbox(0)}
                className="absolute inset-0"
                aria-label="Open image 1"
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <div className="text-lg font-semibold">{images[0].caption}</div>
                  <div className="text-sm opacity-90">{images[0].alt}</div>
                </div>
                <div className="ml-auto p-1 bg-white/10 rounded-full">
                  <FiSearch className="text-white" />
                </div>
              </div>
            </div>

            {/* Other tiles */}
            {images.slice(1).map((img, i) => (
              <div
                key={i + 1}
                className={`relative rounded-lg overflow-hidden shadow-sm transform transition hover:scale-[1.03]`}
                style={{ minHeight: 140 }}
              >
                <button
                  onClick={() => openLightbox(i + 1)}
                  className="absolute inset-0"
                  aria-label={`Open image ${i + 2}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>

                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-end p-3">
                  <div className="text-white opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-sm font-semibold">{img.caption}</div>
                    <div className="text-xs opacity-90">{img.alt}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close"
            >
              <FiX size={22} />
            </button>

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Previous image"
            >
              <FiChevronLeft size={22} />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Next image"
            >
              <FiChevronRight size={22} />
            </button>

            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="p-4 border-t">
                <div className="text-lg font-semibold text-gray-900">{images[index].caption}</div>
                <div className="text-sm text-gray-600 mt-1">{images[index].alt}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
