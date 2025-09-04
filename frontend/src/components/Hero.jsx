import React from 'react'
import BusImg from '../assets/HeroBusImage.svg'
import callIcon from '../assets/call.svg'

const Hero = () => {
    return (
        <div className="w-full mb-12">
            <div className="relative mt-2 rounded-2xl min-h-[400px] bg-[#f0f3f6] overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center">

                    {/* Left Section (only left padding, no conflicting margins) */}
                    <div className="w-full md:w-1/2 px-4 md:pl-12 lg:pl-16 xl:pl-20 md:pr-6 flex flex-col gap-6 md:gap-9 lg:gap-10">
                        <div className="flex flex-col gap-5 md:gap-6 lg:gap-9">
                            <div className="border border-[#B8DDD9] rounded-xl flex items-center justify-center w-48 h-8 sm:w-48 sm:h-9 lg:w-56 lg:h-10">
                                <p className="font-semibold text-sm sm:text-sm lg:text-sm">
                                    TECH-ENABLED TRAVEL
                                </p>
                            </div>
                            <h1 className="font-semibold leading-tight text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[52px]">
                                Driving Values,<br />
                                <span className="text-[#EC221F]">Delivering</span> Results
                            </h1>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5">
                            <p className="text-base md:text-[17px] lg:text-[18px] max-w-full md:max-w-md lg:max-w-lg">
                                Experience comfort, reliability, and tech-enabled journeys with India's leading travel partner—trusted by travellers and businesses alike.
                            </p>
                            <button className="bg-[#EC221F] hover:bg-[#d11d1a] text-white font-semibold text-sm rounded-md flex items-center gap-2 px-3 py-2 w-fit">
                                Contact Us
                                <img src={callIcon} alt="Call icon" className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Section (flush to right edge) */}
                    <div className="relative w-full md:w-1/2 flex justify-end">
                        <img
                            src={BusImg}
                            alt="Hero bus illustration"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
