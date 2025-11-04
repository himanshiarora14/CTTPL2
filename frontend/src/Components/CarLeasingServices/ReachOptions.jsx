import React from "react";
import img1 from '../../images/character.svg';
import img2 from '../../images/2.png';
import bg1 from '../../images/blurcarimage.png';

const cardData = [
  {
    title: "Reach + Options",
    description:
      "You can lease a self-drive car that suits your needs in states like Delhi, Uttar Pradesh, Haryana, Tamil Nadu, Karnataka, Telangana, Maharashtra, Madhya Pradesh, and more. Choose from a variety of models such as Swift, Innova, Crysta, Baleno, i10, i20, Etios, Creta, and others.",
    image: img1,
    bgImage: bg1,
  },
  {
    title: "Tech + Support",
    description:
      "Assistance is available 24/7. Our team managing back-end operations at CTTPL is always ready to address your queries and resolve any issues you encounter. We provide continuous support to our clients, and we're even available to help navigate the complex streets of a new city or country.",
    image: img2,
    bgImage: bg1,
  },
];

export default function ReachOptions() {
  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-x-12 items-start">
          {cardData.map((card, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={idx}
                className="relative min-h-[22rem] sm:min-h-[24rem] lg:min-h-[28rem] flex items-start rounded-2xl pt-4 pl-4 overflow-hidden "
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover'
                }} 
              >
                <div
                  className={`relative z-20 rounded-2xl pr-4 p-8 w-full lg:w-[70%] bg-white backdrop-blur-md shadow-2xl`}
                >
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    {card.title}
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div
                  className={`absolute hidden lg:flex inset-y-0 items-end pointer-events-none`}
                  aria-hidden="true"
                  style={{ bottom: 0 }}
                >
                  <div
                    className={`relative w-[46%] md:w-[40%] lg:-right-60 lg:-bottom-6 lg:w-[80%] z-40`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto max-h-[86%] object-cover select-none"
                      draggable="false"
                    />
                  </div>
                </div>

                {/* Small screens: show image below card */}
                <div className="mt-6 lg:hidden w-full flex justify-center">
                  <div className="w-44 sm:w-52 rounded-2xl shadow-md overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto object-cover select-none"
                      draggable="false"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


