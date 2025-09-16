import React from "react";

const cards = [
  {
    city: "Noida, UP",
    address: "B-99, Transport Nagar, Sector – 69, Noida – 201301",
    img: "/noida_up.png",
  },
  {
    city: "Gurugram, HR",
    address: "25, HUDA Market, Opposite KOD, Sector – 29, Gurugram – 122001",
    img: "/gurugram_hr.png",
  },
  {
    city: "Chennai, TN",
    address: "No. 185, Velachery Main Road, Selaiyur, Chennai – 600073",
    img: "/chennai_tn.png",
  },
  {
    city: "Bangalore, KA",
    address: "9th 10th Cross, Vinayaka Layout, Bhattarahalli Bangalore – 560049",
    img: "/banglore_ka.png",
  },
  {
    city: "Hyderabad, TL",
    address: "Villa # 455, Rainbow Meadows, Patelguda, Hyderabad – 502319",
    img: "/hydrabad.png",
  },
];

const OurPresence = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 p-4 
                       xs:gap-10 xs:p-6 
                       md:gap-12 md:p-8 
                       lg:gap-14 
                       xl:gap-16">
      <div className="w-[95%] flex flex-col gap-6 items-center justify-center flex-wrap
                     xs:w-[85%] 
                     md:w-[75%] md:gap-7 
                     lg:w-[70%] lg:gap-8 
                     xl:w-[65%]">
        <p className="font-semibold text-[32px] leading-[1.2] text-center
                     xs:text-[38px] 
                     md:text-[44px] 
                     lg:text-[48px] 
                     xl:text-[52px]">
          Our Nationwide <span className="text-[#EC221F]">Presence</span>
        </p>
        <p className="text-base font-normal text-center leading-[1.5]
                     xs:text-[17px] 
                     md:text-[18px]">
          Our extensive network allows us to serve corporates, institutions, and
          travelers with the same commitment to safety, reliability, and
          comfort—no matter where your journey begins or ends.
        </p>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className="flex gap-4 w-max animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]
                       xs:gap-6 xs:animate-[scroll_22s_linear_infinite] xs:hover:[animation-play-state:paused]
                       md:gap-7 md:animate-[scroll_20s_linear_infinite] md:hover:[animation-play-state:paused][scroll_20s_linear_infinite_paused]
                       lg:gap-8">
          {[...cards, ...cards].map((card, index) => (
            <div key={index} 
                 className="max-w-[200px] h-[260px] overflow-hidden relative flex justify-center flex-shrink-0
                           xs:max-w-[230px] xs:h-[300px]
                           md:max-w-[250px] md:h-[330px]
                           lg:max-w-[270px] lg:h-[350px]
                           xl:max-w-[279px] xl:h-[366px]">
              <img src={card.img} alt={card.city} 
                   className="w-full h-full object-cover object-center block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/64 z-10"></div>
              <div className="absolute flex flex-col w-4/5 gap-2 bottom-[15px] items-center justify-center z-20
                             xs:w-[70%] xs:gap-[9px] xs:bottom-[18px]
                             md:w-[65%] md:gap-[10px] md:bottom-5
                             xl:w-3/5 xl:gap-[11px]">
                <p className="text-[18px] text-white font-medium text-center
                             xs:text-xl
                             md:text-[22px]
                             lg:text-[23px]
                             xl:text-2xl">
                  {card.city}
                </p>
                <p className="font-normal text-[10px] text-white text-center leading-[1.3]
                             md:text-[11px]">
                  {card.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default OurPresence;