import React from 'react'

const OurClient = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center p-2
                       xs:mt-12 xs:p-4 xs:h-[50vh]
                       md:mt-16 md:px-4 md:py-6 md:h-[55vh]
                       lg:h-[45vh] lg:mt-8
                       xl:h-[40vh] xl:mt-4 xl:p-0">
      <div className="w-[95vw] flex flex-col justify-center items-center gap-4 flex-wrap
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

        <div className="w-full flex justify-around gap-[10px] items-center flex-wrap
                       xs:gap-[15px] xs:justify-center
                       md:gap-[20px] md:justify-between
                       lg:gap-[25px]
                       xl:gap-[30px]">
          <img src="/coforge.svg" alt="" className="max-w-[50px] h-auto
                                                   xs:max-w-[60px]
                                                   sm:max-w-[80px]
                                                   md:max-w-[90px]
                                                   lg:max-w-[100px]
                                                   xl:max-w-none" />
          <img src="/airtel.svg" alt="" className="max-w-[50px] h-auto
                                                  xs:max-w-[60px]
                                                  sm:max-w-[80px]
                                                  md:max-w-[90px]
                                                  lg:max-w-[100px]
                                                  xl:max-w-none" />
          <img src="/metlife.svg" alt="" className="max-w-[50px] h-auto
                                                   xs:max-w-[60px]
                                                   sm:max-w-[80px]
                                                   md:max-w-[90px]
                                                   lg:max-w-[100px]
                                                   xl:max-w-none" />
          <img src="/tata.svg" alt="" className="max-w-[50px] h-auto
                                               xs:max-w-[60px]
                                               sm:max-w-[80px]
                                               md:max-w-[90px]
                                               lg:max-w-[100px]
                                               xl:max-w-none" />
          <img src="/fiserv.svg" alt="" className="max-w-[50px] h-auto
                                                  xs:max-w-[60px]
                                                  sm:max-w-[80px]
                                                  md:max-w-[90px]
                                                  lg:max-w-[100px]
                                                  xl:max-w-none" />
          <img src="/samsung.svg" alt="" className="max-w-[50px] h-auto
                                                   xs:max-w-[60px]
                                                   sm:max-w-[80px]
                                                   md:max-w-[90px]
                                                   lg:max-w-[100px]
                                                   xl:max-w-none" />
          <img src="/logo_dps" alt="" className="max-w-[50px] h-auto
                                               xs:max-w-[60px]
                                               sm:max-w-[80px]
                                               md:max-w-[90px]
                                               lg:max-w-[100px]
                                               xl:max-w-none" />
          <img src="/jio.svg" alt="" className="max-w-[50px] h-auto
                                              xs:max-w-[60px]
                                              sm:max-w-[80px]
                                              md:max-w-[90px]
                                              lg:max-w-[100px]
                                              xl:max-w-none" />
          <img src="/dalima.svg" alt="" className="max-w-[50px] h-auto
                                                 xs:max-w-[60px]
                                                 sm:max-w-[80px]
                                                 md:max-w-[90px]
                                                 lg:max-w-[100px]
                                                 xl:max-w-none" />
        </div>
      </div>
    </section>
  )
}

export default OurClient
