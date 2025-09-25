// TestimonialsMarquee.jsx
import React from "react";

const testimonials = [
  {
    text:
      "Join thousands of satisfied travelers who trust Choudhary Tours & Travels Pvt. Ltd. (CTTPL) for safe, affordable, and tech-enabled mobility solutions. With 35+ years of expertise and a fleet of 4,000+ vehicles, we're here to make your journeys comfortable and stress-free. Contact us today and let's plan your next adventure!",
    author: "Anju Choudhary",
    role: "Chief Technical Officer, CTTPL",
    rating: 2,
  },
  {
    text:
      "Reliable service, friendly drivers and great vehicles. Highly recommended for corporate travel and tours.",
    author: "Rohan Verma",
    role: "Operations Manager",
    rating: 4,
  },
  {
    text:
      "Excellent fleet and very professional team. Seamless experience from booking to drop-off.",
    author: "Priya Singh",
    role: "Travel Coordinator",
    rating: 5,
  },
  {
    text:
      "Comfortable coaches and timely service. We use them for our annual conferences.",
    author: "Suresh Kumar",
    role: "Logistics Head",
    rating: 3,
  },
];

// helper component for stars
function StarRating({ rating }) {
  return (
    <div className="flex text-yellow-400 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : ""}</span>
      ))}
    </div>
  );
}

export default function Comments() {
  return (
    <section className="py-12 font-poppins bg-[#F3F9F9]">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl sm:text-5xl font-semibold text-gray-900 ml-6 mb-8">
          What our <span className="text-red-600">Clients</span> Say?
        </h3>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 whitespace-normal"
            aria-hidden="true"
            style={{ willChange: "transform" }}
          >
            <div className="flex animate-marqueeR">
              {[...testimonials, ...testimonials].map((t, i) => (
                <article
                  key={i}
                  className="w-[320px] min-w-[320px] bg-white rounded-lg p-6 shadow-md border border-transparent"
                >
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {t.text}
                  </p>

                  {/* Dynamic stars */}
                  <StarRating rating={t.rating} />

                  <div className="flex items-center gap-3 mt-2">
                    <div>
                      <div className="font-semibold text-sm text-gray-900">
                        {t.author}
                      </div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/100 to-white/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/100 to-white/0" />
        </div>
      </div>

      <style>{`
        .animate-marqueeR {
          display: flex;
          gap: 1.5rem;
          animation: marqueeR 28s linear infinite;
        }
        @keyframes marqueeR {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @media (max-width: 640px) {
          .animate-marqueeR { animation-duration: 36s; }
        }
      `}</style>
    </section>
  );
}
