import Contact from "../Button/Contact"
import Embedded from "../Button/Embedded"
import img from '../../images/bus11.png'

const Landing = () => {
    return (
        <div className="bg-white py-16 overflow-hidden">
            <div className="w-full md:flex items-center relative bg-[#B8DDD9]/16 overflow-visible">

                {/* Left content with extended background */}
                <div className="relative z-10 md:w-2/5 lg:w-1/2 md:pr-10 p-10 md:pl-16 lg:pl-20 xl:pl-24">
                    <div className="absolute inset-0 w-[200vw] left-0 md:left-auto md:right-0 -z-10"></div>

                    <Embedded text="SAFETY MEETS INNOVATION" />
                    <h2 className="text-5xl font-bold mb-4 pb-6">
                        Tech-Driven<br />
                        <span className="text-[#EC221F]">Safety, Always On</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        From GPS monitoring and panic buttons to AI-powered controls, we're redefining secure travel across India with a 24/7 control centre for unmatched reliability.
                    </p>

                    <Contact />
                </div>

                {/* Right side image - Controlled scaling */}
                <div className="md:w-3/5 lg:w-1/2 mt-8 md:mt-0 pr-4 md:pr-8 lg:pr-12 relative z-20 -my-8 md:-my-10 lg:-my-12 xl:-my-14">
                    <div className="lg:transform lg:scale-110 xl:scale-115 2xl:scale-100 lg:origin-left transition-transform duration-300 overflow-hidden rounded-lg max-w-full">
                        <img
                            src={img}
                            alt="Modern travel bus on highway"
                            className="shadow-lg rounded-2xl w-auto h-auto max-h-[64vh]"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Landing;
