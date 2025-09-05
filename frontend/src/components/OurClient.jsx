import React from 'react'

const OurClient = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center p-2 mt-0
                       xs:mt-4 xs:p-4 xs:h-[50vh]
                       md:mt-6 md:px-4 md:py-6 md:h-[55vh]
                       lg:h-[45vh] lg:mt-4
                       xl:h-[40vh] xl:mt-0 xl:p-0">
      <div className="w-[95vw] flex flex-col justify-center items-center gap-4
                     xs:w-[90vw] xs:gap-6
                     md:w-[85vw] md:gap-8
                     lg:w-[82vw]
                     xl:w-[80vw] xl:gap-8">
        <div className="font-semibold text-[28px] leading-[110%] text-center
                       xs:text-[34px]
                       md:text-[42px]
                       lg:text-[48px]
                       xl:text-[52px]">
          Our <span className="text-[#EC221F]">Clientele</span>
        </div>

        <p className="font-normal text-[14px] text-black w-[95%] text-center leading-[1.4]
                     xs:text-base xs:w-[90%]
                     md:text-[17px] md:w-[75%]
                     lg:text-[18px] lg:w-[70%]
                     xl:w-[65%]">
          Delivering seamless transport services to top corporates and organizations nationwide, trusted by industry leaders for our unmatched fleet, reliability, and service excellence.
        </p>

        {/* Logo container - Fixed to prevent wrapping on larger screens */}
        <div className="w-full flex justify-center items-center gap-[8px] flex-wrap
                       xs:gap-[12px] xs:justify-center
                       md:gap-[16px] md:justify-center
                       lg:gap-[20px] lg:justify-center lg:flex-nowrap
                       xl:gap-[24px] xl:justify-between xl:flex-nowrap">
          <img src="/coforge.svg" alt="Coforge" className="max-w-[40px] h-auto flex-shrink-0
                                                         xs:max-w-[50px]
                                                         sm:max-w-[60px]
                                                         md:max-w-[70px]
                                                         lg:max-w-[80px]
                                                         xl:max-w-[90px]" />
          <img src="/airtel.svg" alt="Airtel" className="max-w-[40px] h-auto flex-shrink-0
                                                        xs:max-w-[50px]
                                                        sm:max-w-[60px]
                                                        md:max-w-[70px]
                                                        lg:max-w-[80px]
                                                        xl:max-w-[90px]" />
          <img src="/metlife.svg" alt="MetLife" className="max-w-[40px] h-auto flex-shrink-0
                                                         xs:max-w-[50px]
                                                         sm:max-w-[60px]
                                                         md:max-w-[70px]
                                                         lg:max-w-[80px]
                                                         xl:max-w-[90px]" />
          <img src="/tata.svg" alt="Tata" className="max-w-[40px] h-auto flex-shrink-0
                                                   xs:max-w-[50px]
                                                   sm:max-w-[60px]
                                                   md:max-w-[70px]
                                                   lg:max-w-[80px]
                                                   xl:max-w-[90px]" />
          <img src="/fiserv.svg" alt="Fiserv" className="max-w-[40px] h-auto flex-shrink-0
                                                        xs:max-w-[50px]
                                                        sm:max-w-[60px]
                                                        md:max-w-[70px]
                                                        lg:max-w-[80px]
                                                        xl:max-w-[90px]" />
          <img src="/samsung.svg" alt="Samsung" className="max-w-[40px] h-auto flex-shrink-0
                                                         xs:max-w-[50px]
                                                         sm:max-w-[60px]
                                                         md:max-w-[70px]
                                                         lg:max-w-[80px]
                                                         xl:max-w-[90px]" />
          <img src="/logo_dps.svg" alt="DPS" className="max-w-[40px] h-auto flex-shrink-0
                                                       xs:max-w-[50px]
                                                       sm:max-w-[60px]
                                                       md:max-w-[70px]
                                                       lg:max-w-[80px]
                                                       xl:max-w-[90px]" />
          <img src="/jio.svg" alt="Jio" className="max-w-[40px] h-auto flex-shrink-0
                                                  xs:max-w-[50px]
                                                  sm:max-w-[60px]
                                                  md:max-w-[70px]
                                                  lg:max-w-[80px]
                                                  xl:max-w-[90px]" />
          <img src="/dalima.svg" alt="Dalima" className="max-w-[40px] h-auto flex-shrink-0
                                                       xs:max-w-[50px]
                                                       sm:max-w-[60px]
                                                       md:max-w-[70px]
                                                       lg:max-w-[80px]
                                                       xl:max-w-[90px]" />
        </div>
      </div>
    </section>
  )
}

export default OurClient
