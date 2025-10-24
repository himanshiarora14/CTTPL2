import React from 'react'

const OurClient = () => {
  const clientLogos = [
    { src: "/coforge.png", alt: "Coforge" },
    { src: "/vishwya.png", alt: "lps" },
    { src: "/cambridge.png", alt: "lps" },
    { src: "/airtel.png", alt: "Airtel" },
    { src: "/metlife-logo.png", alt: "MetLife" },
    { src: "/JPS.png", alt: "lps" },
    { src: "/mangalya.png", alt: "lps" },
    { src: "/tata.png", alt: "Tata" },
    { src: "/fiserv.png", alt: "Fiserv" },
    { src: "/Amity.png", alt: "lps" },
    { src: "/LIS.png", alt: "lps" },
    { src: "/adani.png", alt: "lps" },
    { src: "/samsung.png", alt: "Samsung" },
    { src: "/dps.png", alt: "DPS" },
    { src: "/reliance.png", alt: "Jio" },
    { src: "/dalmia.png", alt: "Dalima" },
    { src: "/raghavGlobal.svg", alt: "school" },
    { src: "/lps.png", alt: "lps" },
    { src: "/NIIMS.png", alt: "lps" },
    { src: "/PCL.png", alt: "lps" },
    { src: "/IndianOil.png", alt: "lps" },
    { src: "/DB.png", alt: "lps" },
    { src: "/alorica.png", alt: "lps" },
    { src: "/techMahindra.png", alt: "lps" },
    { src: "/Denva.png", alt: "lps" },
    { src: "/Alttrust.png", alt: "lps" },
    { src: "/iris.png", alt: "iris" },
    { src: "/RelianceDigital.png", alt: "RelianceDigital" },
    { src: "/newgen.png", alt: "newgen" },
    { src: "/asianPaints.png", alt: "asianPaints" },
    { src: "/orientFashion.png", alt: "orientFashion" },
    { src: "/suprajit.png", alt: "suprajit" },
    { src: "/indigrid.png", alt: "indigrid" },
    { src: "/pawanHans.png", alt: "pawanHans" },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center p-2 mt-0 xs:mt-4 xs:p-4 md:mt-6 md:px-4 md:py-6 lg:mt-4 xl:mt-14 xl:p-0">
      <div className="w-[95vw] flex flex-col justify-center items-center gap-4 xs:w-[90vw] xs:gap-6 md:w-[85vw] md:gap-8 lg:w-[82vw] xl:w-[80vw] xl:gap-8">
        <div className="font-semibold text-[28px] leading-[110%] text-center xs:text-[34px] md:text-[42px] lg:text-[42px] xl:text-5xl">
          Our <span className="text-[#EC221F]">Clientele</span>
        </div>
        <p className="font-normal text-[14px] text-black w-[95%] text-center leading-[1.4] xs:text-base xs:w-[90%] md:text-[17px] md:w-[75%] lg:text-[18px] lg:w-[70%] xl:w-[70%]">
          Delivering seamless transport services to top corporates and organizations nationwide,
          trusted by industry leaders for our unmatched fleet, reliability, and service excellence.
        </p>

        <div className="w-full overflow-hidden bg-white py-4 rounded-lg shadow-sm">
          <div className="marquee-track">
            {clientLogos.map((logo, index) => (
              <img
                key={`set1-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="flex-shrink-0 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 object-contain mr-6 md:mr-10 brightness-110 transition-all duration-300"
              />
            ))}
            {clientLogos.map((logo, index) => (
              <img
                key={`set2-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="flex-shrink-0 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 object-contain mr-6 md:mr-10 brightness-110 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default OurClient
