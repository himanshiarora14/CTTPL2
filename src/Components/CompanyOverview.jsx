import React from 'react'

const CompanyOverView = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-4 px-4 md:mt-6 md:px-8 lg:mt-8 lg:px-0 xl:px-8 overflow-x-hidden">
            <div className="w-full flex flex-col gap-6 md:gap-8 xl:max-w-[1200px]">
                {/* Break out COMPLETELY for true full-width background */}
                <div className="relative">
                    <article className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col items-center gap-4 lg:h-[70vh] lg:flex-row lg:gap-0">
                        {/* image - positioned from left edge */}
                        <div className="w-full lg:w-[50vw] flex justify-start">
                            <img 
                                src="/finalbus.png" 
                                alt="" 
                                className="w-full max-w-[400px] h-auto aspect-[16/10] shadow-[0px_4px_80px_0px_#00000042] rounded-[15px] md:max-w-[500px] lg:w-full lg:h-[65vh] lg:max-w-none lg:aspect-auto ml-4 md:ml-8 lg:ml-0" 
                            />
                        </div>

                        {/* content - full width background */}
                        <div className="bg-[#D9D9D9] flex flex-col justify-center items-center w-full p-6 md:p-8 lg:p-0 lg:w-[50vw]">
                            <div className="flex flex-col justify-center w-full items-center gap-[15px] text-center md:w-4/5 md:gap-5 lg:h-[50vh] lg:w-[65%] lg:gap-5 lg:text-left">
                                <p className="text-2xl font-bold md:text-4xl lg:text-[30px]">Inception - 1990</p>
                                <p>Founded in 1990 by Mr. P.S. Choudhary, Choudhary Tours & Travels Pvt. Ltd. (CTTPL) began with a vision to transform transportation services across India. What started as a small operation has evolved into a vast network spanning eight major cities and a fleet strength of over 4000 vehicles. CTTPL's journey has been shaped by a deep commitment to customer safety, integrity, and innovation.</p>
                            </div>
                        </div>
                    </article>
                </div>

                {/* description */}
                <article className="w-full flex items-center justify-center min-h-auto mx-auto px-4 md:w-[85%] lg:w-3/4">
                    <p className="text-base leading-6 text-center md:text-lg lg:text-xl lg:text-left"> Today, under the leadership of Mr. Rajeev Choudhary, CEO, and Mr. Sandeep Choudhary, Joint Managing Director, CTTPL stands as a trusted partner in corporate and public transportation, offering a wide range of services—from employee and school transport to car leasing and sustainable electric fleets. Our story is one of growth, driven by a mission to contribute positively to the communities we serve and to set new standards in the transportation industry.</p>
                </article>

                {/* statement */}
                <article className="w-full flex flex-col justify-center items-center p-4 lg:h-[60vh] lg:p-0">
                    <div className="w-full flex flex-col justify-center gap-8 md:w-[90%] md:gap-12 lg:w-4/5 lg:flex-row lg:gap-20">
                        {/* our mission */}
                        <div className="w-full flex flex-col gap-4 lg:w-2/5 lg:gap-6">
                            <div className="flex justify-start gap-4 items-center lg:gap-6">
                                <img 
                                    src="/ourMission.svg" 
                                    alt="" 
                                    className="h-10 w-10 md:h-[50px] md:w-[50px] lg:h-[8vh] lg:w-auto"
                                />
                                <p className="text-xl text-[#EC221F] font-bold md:text-2xl lg:text-[30px]">Our Mission Statement</p>
                            </div>
                            <p>Our Mission and Vision statements reflect Choudhary Tours & Travels Pvt. Ltd.'s (CTTPL) unwavering commitment to excellence and progress in the transportation industry. Our Mission focuses on delivering safe, innovative, and sustainable transportation solutions that drive growth for both our clients and communities. This dedication extends to fostering partnerships built on trust, integrity, and the highest standards of service.</p>
                        </div>

                        {/* our vision */}
                        <div className="w-full flex flex-col gap-4 lg:w-2/5 lg:gap-6">
                            <div className="flex justify-start gap-4 items-center lg:gap-6">
                                <img 
                                    src="/OurVision.svg" 
                                    alt="" 
                                    className="h-10 w-10 md:h-[50px] md:w-[50px] lg:h-[8vh] lg:w-auto"
                                />
                                <p className="text-xl text-black font-bold md:text-2xl lg:text-[30px]">Our Vision Statement</p>
                            </div>
                            <p>Our Vision captures our long-term aspiration to lead India's transportation sector as a beacon of sustainability and safety. We aim to create value through cutting-edge technology, eco-conscious practices, and a relentless commitment to client and community well-being. Together, these principles guide our journey toward achieving positive, impactful change in every service we provide.</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default CompanyOverView
