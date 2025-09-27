import React from "react";
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
const cardData = [
  {
    title: "Reach + Options",
    description:
      "You can lease a self-drive car that suits your needs in states like Delhi, Uttar Pradesh, Haryana, Tamil Nadu, Karnataka, Telangana, Maharashtra, Madhya Pradesh, and more. Choose from a variety of models such as Swift, Innova, Crysta, Baleno, i10, i20, Etios, Creta, and others.",
    image: img1,
  },
  {
    title: "Tech + Support",
    description:
      "Assistance is available 24/7. Our team managing back-end operations at CTTPL is always ready to address your queries and resolve any issues you encounter. We provide continuous support to our clients, and we're even available to help navigate the complex streets of a new city or country.",
    image: img2,
  },
];

export default function ReachOptions() {
  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-16">
          {cardData.map((card, idx) => (
            <article key={idx} className="relative min-h-[26rem] sm:min-h-[24rem]">
              <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-[90%] sm:w-[80%] z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-full h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute bottom-0 right-0 h-auto w-full max-w-sm sm:max-w-md object-contain select-none"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}