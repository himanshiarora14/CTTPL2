import React from 'react'
import BusImg from '../assets/HeroBusImage.svg'
import callIcon from '../assets/call.svg'

const Hero = () => {
    return (
        <div className="flex flex-col w-full justify-center  mb-46">
            <div className="mt-2 ml-4 flex flex-col relative rounded-[20px] p-4 min-h-[400px]
                           before:content-[''] before:absolute before:top-[5%] before:left-0 before:translate-y-0 
                           before:h-[110%] before:w-full before:bg-[#B8DDD929] before:rounded-[20px] before:z-0
                           sm:ml-6 sm:p-6
                           md:flex-row md:items-center md:gap-8 md:pl-8
                           md:before:top-[8%] md:before:left-[50px] md:before:h-[115%] md:before:w-[90%]
                           lg:ml-8 lg:pl-8 lg:before:left-[50px]
                           hero-container">

                {/* left section */}
                <div className="w-full relative z-10 hero-left">
                    <div className="flex flex-col gap-[25px] relative top-5 left-0 px-4
                                   md:top-[60px] md:left-[60px] md:px-0 md:gap-[35px]
                                   lg:top-20 lg:left-[90px] lg:gap-[41px]
                                   hero-text-content">
                        
                        <div className="flex flex-col gap-5 md:gap-[25px] lg:gap-[35px]">
                            <div className="max-w-[180px] h-8 border border-[#B8DDD9] rounded-[10px] flex items-center justify-center
                                          sm:max-w-[200px] sm:h-[35px]
                                          md:max-w-[210px] md:h-9
                                          lg:max-w-[222px] lg:h-[37px]">
                                <p className="font-semibold text-[14px] tracking-[0%]
                                             sm:text-[15px] md:text-[15px] lg:text-base">
                                    TECH-ENABLED TRAVEL
                                </p>
                            </div>
                            
                            <h1 className="font-semibold leading-[1.1] tracking-0
                                         text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[52px]">
                                Driving Values,<br /> <span className="text-[#EC221F]">Delivering</span> Results
                            </h1>
                        </div>

                        <div className="flex flex-col gap-[15px] md:gap-[18px] lg:gap-5 hero-description">
                            <p className="font-normal text-base md:text-[17px] lg:text-[18px] tracking-[0%]">
                                Experience comfort, reliability, and tech-enabled journeys with India's leading travel partner—trusted by travellers and businesses alike.
                            </p>
                            
                            <button className="w-[140px] h-[38px] bg-[#EC221F] rounded-[5px] flex justify-between items-center px-3 py-2 cursor-pointer gap-3
                                             sm:w-[150px] sm:h-10 sm:px-[14.4px] sm:py-[9.6px] sm:gap-[14px]
                                             md:w-[155px] md:h-[42px] md:px-[15.2px] md:py-[11.2px] md:gap-[15px]
                                             lg:w-40 lg:h-[43px] lg:px-4 lg:py-3 lg:gap-4">
                                <span className="text-white font-semibold text-[14px]">
                                    Contact Us
                                </span>
                                <img src={callIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* right section img*/}
                <div className="relative z-[2] hero-image-container">
                    <img src={BusImg} alt="" className="w-full h-auto hero-image" />
                </div>
            </div>

            {/* Comprehensive Responsive CSS */}
            <style jsx global>{`
                /* Mobile First - Base styles */
                .hero-left {
                    width: 100%;
                    flex-shrink: 0;
                }
                
                .hero-image-container {
                    width: 80%;
                    max-width: 300px;
                    align-self: flex-end;
                    margin-top: 20px;
                }
                
                .hero-description {
                    max-width: 100%;
                }

                /* Small Mobile */
                @media (min-width: 640px) {
                    .hero-image-container {
                        width: 100%;
                        max-width: 350px;
                    }
                }

                /* Tablet */
                @media (min-width: 768px) {
                    .hero-container {
                        align-items: flex-start;
                    }
                    
                    .hero-left {
                        width: 50%;
                        max-width: 400px;
                    }
                    
                    .hero-image-container {
                        width: 45%;
                        max-width: 450px;
                        margin-top: 120px;
                        align-self: auto;
                    }
                    
                    .hero-description {
                        max-width: 350px;
                    }
                }

                /* Large Tablet / Small Desktop */
                @media (min-width: 1024px) {
                    .hero-left {
                        width: 45%;
                        max-width: 500px;
                    }
                    
                    .hero-image-container {
                        width: 50%;
                        max-width: 550px;
                        margin-top: 60px;
                    }
                    
                    .hero-description {
                        max-width: 400px;
                    }
                }

                /* Desktop */
                @media (min-width: 1280px) {
                    .hero-container {
                        align-items: center;
                    }
                    
                    .hero-left {
                        width: 40%;
                        max-width: 600px;
                    }
                    
                    .hero-image-container {
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: auto;
                        max-width: 60%;
                        margin-top: 0;
                    }
                    
                    .hero-description {
                        max-width: 450px;
                    }
                }

                /* Large Desktop */
                @media (min-width: 1536px) {
                    .hero-left {
                        width: 35%;
                    }
                    
                    .hero-image-container {
                        max-width: none;
                    }
                }

                /* Fix for problem range 1285px - 1400px */
                @media (min-width: 1285px) and (max-width: 1400px) {
                    .hero-left {
                        width: 42% !important;
                        max-width: 550px !important;
                    }
                    
                    .hero-image-container {
                        position: relative !important;
                        width: 50% !important;
                        max-width: 500px !important;
                        margin-top: 40px !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default Hero
