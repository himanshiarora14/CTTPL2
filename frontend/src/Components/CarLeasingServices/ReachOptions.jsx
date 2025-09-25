// ReachOptions.jsx
import React from "react";

const cardData = [
  {
    title: "Reach + Options",
    description:
      "You can lease a self-drive car that suits your needs in states like Delhi, Uttar Pradesh, Haryana, Tamil Nadu, Karnataka, Telangana, Maharashtra, Madhya Pradesh, and more. Choose from a variety of models such as Swift, Innova, Crysta, Baleno, i10, i20, Etios, Creta, and others.",
    bgImage: "/assets/blurcarimage.png",
    characterImage: "/assets/character.svg",
  },
  {
    title: "Tech + Support",
    description:
      "Assistance is available 24/7. Our team managing back-end operations at CTTPL is always ready to address your queries and resolve any issues you encounter. We provide continuous support to our clients, and we're even available to help navigate the complex streets of a new city or country.",
    bgImage: "/assets/blurcarimage.png",
    characterImage: "/assets/character.svg",
  },
];

export default function ReachOptions() {
  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cardData.map((card, idx) => (
            <article
              key={idx}
              className="relative w-full h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[42rem]"
            >
              {/* SMALLER BACKGROUND IMAGE */}
              <div className="absolute bottom-10 right-8 z-0">
                <div className="w-52 sm:w-64 md:w-72 lg:w-80 h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={card.bgImage}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* CONTENT CARD */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 w-64 sm:w-80">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* LARGER CHARACTER IMAGE */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30">
                <img
                  src={card.characterImage}
                  alt={`${card.title} character`}
                  className="w-52 sm:w-64 md:w-72 lg:w-[22rem] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
