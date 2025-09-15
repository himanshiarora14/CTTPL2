const Hero = () => {
    return (
        <div className="w-full flex justify-center items-start sm:items-center px-4 lg:px-0 overflow-x-hidden pt-4 sm:pt-0">
            <section className="min-h-[75vh] sm:min-h-[85vh] w-full lg:w-[95%] lg:ml-[5%] flex justify-center items-center">
                <div className="w-full h-auto min-h-[60vh] lg:h-[70vh] bg-[#f0f3f6] flex flex-col lg:flex-row items-center rounded-[20px] p-4 md:p-6 lg:p-0 relative overflow-visible">

                    {/* Left Content Section - Enhanced tablet typography */}
                    <div className="flex flex-col gap-4 lg:ml-[4%] w-full lg:w-[40%] z-20 p-4 relative">

                        {/* Badge and Heading */}
                        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                            <div className="border border-[#B8DDD9] flex justify-center items-center w-fit px-4 md:px-5 h-10 md:h-14 rounded-[10px]">
                                <p className="text-xs sm:text-sm md:text-[15px] lg:text-[14px] font-bold text-gray-800 tracking-wide">TECH-ENABLED TRAVEL</p>
                            </div>

                            <h1 className="text-2xl sm:text-[2.2rem] md:text-[2.8rem] lg:text-4xl xl:text-[3.2rem] font-bold leading-tight text-gray-900">
                                Driving Values,<br />
                                <span className="text-[#EC221F]">Delivering</span> Results
                            </h1>
                        </div>

                        {/* Description and Button */}
                        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                                Experience comfort, reliability, and tech-enabled journeys with India's leading travel partner—trusted by travellers and businesses alike.
                            </p>

                            <a
                                href="/contact"
                                className="w-fit flex justify-center items-center gap-2 md:gap-4 bg-[#EC221F] border-none rounded-[8px] px-4 md:px-4 py-3 md:py-2 cursor-pointer hover:bg-[#d11e1b] transition-colors duration-200 shadow-lg"
                            >
                                <p className="text-white text-base md:text-xl lg:text-xl font-medium">
                                    Contact Us
                                </p>
                                <img
                                    src="/call.svg"
                                    alt="call"
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"
                                />
                            </a>

                        </div>
                    </div>

                    {/* Right Image Section - Significantly bigger for tablets */}
                    <div className="w-full lg:w-[60%] flex justify-end items-end lg:items-center mt-auto md:mt-auto lg:mt-0 relative right-[-15px] md:right-[-40px] lg:absolute lg:right-[-1%] lg:top-1/2 lg:-translate-y-1/2">
                        <img
                            src="/HeroBusImage.svg"
                            alt="Modern travel bus on highway"
                            className="w-[120%] sm:w-[120%] md:w-[115%] lg:w-[90%] h-auto max-h-[350px] md:max-h-[420px] lg:max-h-none object-contain lg:h-[85vh] lg:object-cover lg:object-left"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
