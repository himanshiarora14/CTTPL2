import React from 'react'

const OurClient = () => {
  const clientLogos = [
    { src: "/coforge.svg", alt: "Coforge" },
    {src:"/vishwya.png",alt:"lps"},
    {src:"/cambridge.png",alt:"lps"},
    { src: "/airtel.svg", alt: "Airtel" },
    { src: "/metlife.svg", alt: "MetLife" },
    {src:"/JPS.png",alt:"lps"},
    {src:"/mangalya.png",alt:"lps"},
    { src: "/tata.svg", alt: "Tata" },
    { src: "/fiserv.svg", alt: "Fiserv" },
    {src:"/Amity.png",alt:"lps"},
    {src:"/LIS.png",alt:"lps"},
    {src:"/adani.png",alt:"lps"},
    { src: "/samsung.svg", alt: "Samsung" },
    { src: "/logo_dps.svg", alt: "DPS" },
    { src: "/jio.svg", alt: "Jio" },
    { src: "/dalima.svg", alt: "Dalima" },
    {src: "/raghavGlobal.svg", alt:"school"},
    {src:"/lps.png",alt:"lps"},

    {src:"/NIIMS.png",alt:"lps"}, 
    {src:"/PCL.png",alt:"lps"},
    {src:"/IndianOil.png",alt:"lps"},
    {src:"/DB.png",alt:"lps"},
    {src:"/alorica.png",alt:"lps"},
    {src:"/techMahindra.png",alt:"lps"},
    {src:"/Denva.png",alt:"lps"},
    {src:"/Alttrust.png",alt:"lps"},
    {src:"/iris.png",alt:"iris"},
    {src:"/RelianceDigital.png",alt:"RelianceDigital"},
    {src:"/newgen.png",alt:"newgen"},
    {src:"/asianPaints.png",alt:"asianPaints"},
    {src:"/orientFashion.png",alt:"orientFashion"},
    {src:"/suprajit.png",alt:"suprajit"},
    {src:"/indigrid.png",alt:"indigrid"},
    {src:"/pawanHans.png",alt:"pawanHans"},

  ];

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center p-2 mt-0
                       xs:mt-4 xs:p-4 xs:h-[50vh]
                       md:mt-6 md:px-4 md:py-6 md:h-[55vh]
                       lg:h-[45vh] lg:mt-4
                       xl:h-[40vh] xl:mt-6 xl:p-0">
      <div className="w-[95vw] flex flex-col justify-center items-center gap-4
                     xs:w-[90vw] xs:gap-6
                     md:w-[85vw] md:gap-8
                     lg:w-[82vw]
                     xl:w-[80vw] xl:gap-8">

        {/* Heading */}
        <div className="font-semibold text-[28px] leading-[110%] text-center
                       xs:text-[34px]
                       md:text-[42px]
                       lg:text-[42px]
                       xl:text-[42px]">
          Our <span className="text-[#EC221F]">Clientele</span>
        </div>

        {/* Subheading */}
        <p className="font-normal text-[14px] text-black w-[95%] text-center leading-[1.4]
                     xs:text-base xs:w-[90%]
                     md:text-[17px] md:w-[75%]
                     lg:text-[18px] lg:w-[70%]
                     xl:w-[65%]">
          Delivering seamless transport services to top corporates and organizations nationwide, 
          trusted by industry leaders for our unmatched fleet, reliability, and service excellence.
        </p>

        {/* Infinite Scrolling Logos */}
        <div className="w-full overflow-hidden">
          <div className="marquee-track">
            {/* First set */}
            {clientLogos.map((logo, index) => (
              <img 
                key={`set1-${index}`}
                src={logo.src} 
                alt={logo.alt} 
                className="flex-shrink-0 max-w-[40px] h-auto mr-4
                          xs:max-w-[50px] xs:mr-6
                          sm:max-w-[60px] sm:mr-8
                          md:max-w-[70px] md:mr-8
                          lg:max-w-[80px] lg:mr-10
                          xl:max-w-[90px] xl:mr-12" 
              />
            ))}
            {/* Second set (duplicate) */}
            {clientLogos.map((logo, index) => (
              <img 
                key={`set2-${index}`}
                src={logo.src} 
                alt={logo.alt} 
                className="flex-shrink-0 max-w-[40px] h-auto mr-4
                          xs:max-w-[50px] xs:mr-6
                          sm:max-w-[60px] sm:mr-8
                          md:max-w-[70px] md:mr-8
                          lg:max-w-[80px] lg:mr-10
                          xl:max-w-[90px] xl:mr-12" 
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
          animation: marquee 35s linear infinite;
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
