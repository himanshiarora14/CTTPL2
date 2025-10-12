// import Contact from "./Button/Contact"
// import Contact2 from './Button/Contact2.jsx'
import Contact2 from './Button/Contact.jsx'
import Embedded from '../Components/Button/Embedded'

const Hero = () => {
    return (
        <div className="w-full flex justify-center items-start sm:items-center px-4 lg:px-0 overflow-x-hidden pt-4 sm:pt-0">
            <section className="min-h-[75vh] sm:min-h-[85vh] w-full lg:w-[95%] lg:ml-[5%] flex justify-center items-center">
                <div className="w-full h-auto min-h-[60vh] lg:h-[70vh] bg-[#f2f8f8] flex flex-col lg:flex-row items-center rounded-[20px] p-4 md:p-6 lg:p-0 relative overflow-visible">

                    {/* Left Content Section - Enhanced tablet typography */}
                    <div className="flex flex-col gap-4 lg:ml-[4%] w-full lg:w-[40%] z-20 p-4 relative">

                        {/* Badge and Heading */}
                        <div className="flex flex-col gap-4 md:gap-2">
                            <div>
                                <Embedded text={"TECH-ENABLED TRAVEL"} />
                            </div>

                            <h1 className="text-2xl sm:text-[2.2rem] md:text-[2.8rem] lg:text-4xl xl:text-[3.2rem] font-semibold leading-[1.1] text-gray-900">
                                <span className="block">Driving Values,</span>
                                <span className="block">
                                    <span className="text-[#EC221F]">Delivering</span> Results
                                </span>
                            </h1>


                        </div>

                        {/* Description and Button */}
                        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                                Experience comfort, reliability, and tech-enabled journeys with India's leading travel partner—trusted by travellers and businesses alike.
                            </p>

                            <Contact2 />

                        </div>
                    </div>

                    {/* Right Image Section */}
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
