// TestimonialsMarquee.jsx
import React from "react";
import bus2 from "../images/bus2.png"; // optional image per card

const testimonials = [
  {
    text:
      "Join thousands of satisfied travelers who trust Choudhary Tours & Travels Pvt. Ltd. (CTTPL) for safe, affordable, and tech-enabled mobility solutions. With 35+ years of expertise and a fleet of 4,000+ vehicles, we're here to make your journeys comfortable and stress-free. Contact us today and let's plan your next adventure!",
    author: "Anju Choudhary",
    role: "Chief Technical Officer, CTTPL",
  },
  {
    text:
      "Reliable service, friendly drivers and great vehicles. Highly recommended for corporate travel and tours.",
    author: "Rohan Verma",
    role: "Operations Manager",
  },
  {
    text:
      "Excellent fleet and very professional team. Seamless experience from booking to drop-off.",
    author: "Priya Singh",
    role: "Travel Coordinator",
  },
  {
    text:
      "Comfortable coaches and timely service. We use them for our annual conferences.",
    author: "Suresh Kumar",
    role: "Logistics Head",
  },
];

export default function Comments() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 ml-6 mb-8">
          What our <span className="text-red-600">Clients</span> Say?
        </h3>

        {/* marquee wrapper */}
        <div className="relative overflow-hidden">
          {/* the scroll track - duplicate content for seamless loop */}
          <div
            className="flex gap-6 whitespace-normal"
            aria-hidden="true"
            style={{ willChange: "transform" }}
          >
            <div className="flex animate-marqueeR">
              {/* map twice for continuous effect */}
              {[...testimonials, ...testimonials].map((t, i) => (
                <article
                  key={i}
                  className="w-[320px] min-w-[320px] bg-white rounded-lg p-6 shadow-md border border-transparent"
                >
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {t.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={bus2}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">
                        {t.author}
                      </div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-1">
                      {/* simple 5-star look */}
                      <div className="text-yellow-400 text-sm">★★★★★</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* optional fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/100 to-white/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/100 to-white/0" />
        </div>
      </div>

      {/* tiny style block to define marquee animation (keeps Tailwind classes for everything else) */}
      <style>{`
        /* move content left->right visually by animating from translateX(-50%) to translateX(0)
           Duration can be adjusted (here 28s). Using duplicated content ensures seamless loop. */
        .animate-marqueeR {
          display: flex;
          gap: 1.5rem;
          animation: marqueeR 28s linear infinite;
        }
        @keyframes marqueeR {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        /* make marquee slower on small screens */
        @media (max-width: 640px) {
          .animate-marqueeR { animation-duration: 36s; }
        }
      `}</style>
    </section>
  );
}
