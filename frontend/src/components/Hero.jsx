import React from 'react'
import BusImg from '../assets/HeroBusImage.svg'
import callIcon from '../assets/call.svg'

const Hero = () => {
    return (
        <div className="flex flex-col w-full justify-center min-h-[90vh] mb-16">
            <div className="mt-2 ml-4 flex flex-col gap-4 relative rounded-[20px] p-4 min-h-[400px]
                           before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-[52%] 
                           before:h-[90%] before:w-full before:bg-[#B8DDD929] before:rounded-[20px] before:z-0
                           sm:ml-6 sm:p-6
                           md:mt-4 md:flex-row md:flex-wrap md:gap-8 md:justify-between md:items-center md:pl-8
                           md:before:top-[55%] md:before:left-[50px] md:before:h-full md:before:w-[90%]
                           lg:ml-8 lg:pl-8 lg:before:left-[50px]">

                <div className="bg-none w-full flex-1 relative z-10">
                    <div className="flex flex-col gap-[25px] min-h-auto relative top-5 left-0 w-full px-4
                                   md:gap-[35px] md:min-h-[400px] md:top-[60px] md:left-[60px] md:w-full md:px-0
                                   lg:gap-[41px] lg:min-h-[500px] lg:top-20 lg:left-[90px] lg:w-[30%]">
                        <div className="flex flex-col gap-5
                                       md:gap-[25px]
                                       lg:gap-[35px]">
                            <div className="max-w-[180px] h-8 border border-[#B8DDD9] rounded-[10px] flex items-center justify-center
                                          sm:max-w-[200px] sm:h-[35px]
                                          md:max-w-[210px] md:h-9
                                          lg:max-w-[222px] lg:h-[37px]">
                                <p className="font-semibold text-[14px] tracking-[0%]
                                             sm:text-[15px]
                                             md:text-[15px]
                                             lg:text-base">
                                    TECH-ENABLED TRAVEL
                                </p>
                            </div>
                            <p className="font-semibold text-[52px] leading-[1.1] tracking-0
                                         sm:text-[32px]
                                         md:text-[42px]
                                         lg:text-[52px]">
                                Driving Values,<br /> <span className="text-[#EC221F]">Delivering</span> Results
                            </p>
                        </div>

                        <div className="w-full max-w-full flex gap-[15px] flex-col
                                       md:max-w-[350px] md:gap-[18px]
                                       lg:max-w-[400px] lg:gap-5">
                            <p className="font-normal text-base tracking-[0%]
                                         md:text-[17px]
                                         lg:text-[18px]">
                                Experience comfort, reliability, and tech-enabled journeys with India's leading travel partner—trusted by travellers and businesses alike.
                            </p>
                            <button className="w-[140px] h-[38px] bg-[#EC221F] rounded-[5px] flex justify-between items-center px-3 py-2 cursor-pointer gap-3
                                             sm:w-[150px] sm:h-10 sm:px-[14.4px] sm:py-[9.6px] sm:gap-[14px]
                                             md:w-[155px] md:h-[42px] md:px-[15.2px] md:py-[11.2px] md:gap-[15px]
                                             lg:w-40 lg:h-[43px] lg:px-4 lg:py-3 lg:gap-4">
                                <span className="text-white font-semibold text-[14px]
                                               sm:text-[14px]
                                               md:text-[14px]
                                               lg:text-[14px]">
                                    Contact Us
                                </span>
                                <img src={callIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* right section img*/}
                <img src={BusImg} alt="" className="relative w-4/5 max-w-[300px] self-end z-[2]
                                                   sm:w-full sm:max-w-[350px]
                                                   md:relative md:right-0 md:top-32 md:w-auto md:max-w-[50%] md:self-auto
                                                   lg:absolute lg:right-0 lg:top-0 lg:w-auto lg:max-w-none lg:self-auto" />
            </div>
        </div>
    )
}

export default Hero
