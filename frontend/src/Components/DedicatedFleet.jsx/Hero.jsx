import Contact from '../Button/Contact'
import Embedded from '../Button/Embedded'
import img from '../../images/bus7.png'

// const Hero = () => {
//     return (
//         <div className="w-full flex justify-center items-start sm:items-center px-4 lg:px-0 overflow-x-hidden pt-4 sm:pt-0">
//             <section className="min-h-[75vh] sm:min-h-[85vh] w-full lg:w-[95%] lg:ml-[5%] flex justify-center items-center">
//                 <div className="w-full h-auto min-h-[60vh] lg:h-[70vh] bg-[#f2f8f8] flex flex-col lg:flex-row items-center rounded-[20px] p-4 md:p-6 lg:p-0 relative overflow-visible">

//                     {/* Left Content Section - Enhanced tablet typography */}
//                     <div className="flex flex-col gap-4 lg:ml-[4%] w-full lg:w-[40%] z-20 p-4 relative">

//                         {/* Badge and Heading */}
//                         <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
//                             <div>
//                                 <Embedded text={"OUR DIVERSE FLEET"}/> 
//                             </div>

//                             <h1 className="text-2xl sm:text-[2.2rem] md:text-[2.8rem] lg:text-4xl xl:text-[3.2rem] font-bold leading-tight text-gray-900">
//                                 Exclusive Fleet,<br />
//                                 <span className="text-[#EC221F]">Tailored For You </span> 
//                             </h1>
//                         </div>

//                         {/* Description and Button */}
//                         <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
//                             <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed">
//                             From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles. Choose comfort, safety, and reliability—every journey, every time.
//                             </p>

//                             <Contact/>

//                         </div>
//                     </div>

//                    <div className="md:w-3/5 lg:w-1/2 mt-8 md:mt-0 pr-4 md:pr-8 lg:pr-12 relative z-20 -my-8 md:-my-10 lg:-my-12 xl:-my-14">
//                     <div className="lg:transform lg:scale-110 xl:scale-115 2xl:scale-100 lg:origin-left transition-transform duration-300 overflow-hidden rounded-lg max-w-full">
//                         <img
//                             src={img}
//                             alt="Modern travel bus on highway"
//                             className="shadow-lg w-full h-auto max-h-[64vh]"
//                         />
//                     </div>
//                 </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Hero


const Hero = () => {
    return (
        <div className="bg-white p-0 md:py-16  overflow-hidden">
            <div className="w-full md:flex items-center relative bg-[#B8DDD9]/16 overflow-visible">

                {/* Left content with extended background */}
                <div className="relative z-10 md:w-2/5 lg:w-1/2 md:pr-10 p-10 md:pl-16 lg:pl-20 xl:pl-24">
                    <div className="absolute inset-0 w-[100vw] left-0 md:left-auto md:right-0 -z-10"></div>

                    <Embedded text="OUR DIVERSE FLEET" />
                    <h2 className="text-5xl font-bold mb-4 pb-6">
                    
                        <span className="text-red-500">Exclusive Fleet,</span>
                        <br />Tailored for You
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles. Choose comfort, safety, and reliability — every journey, every time.
                    </p>

                    <Contact />
                </div>


                {/* Right side image - Mobile safe + Laptop original */}
                <div className="
  md:w-3/5 lg:w-1/2 
  mt-8 md:mt-0 
  px-4 md:px-8 lg:px-12 
  relative z-20 
  overflow-hidden 
  md:overflow-visible 
  -my-0 md:-my-10 lg:-my-12 xl:-my-14
">
                    <div
                        className="
      w-full h-auto 
      lg:transform lg:scale-110 xl:scale-115 2xl:scale-100 lg:origin-left 
      transition-transform duration-300 
      rounded-lg max-w-full
    "
                    >
                        <img
                            src={img}
                            alt="Bus from CTPL fleet"
                            className="
        shadow-lg w-70% h-auto rounded-lg
        object-contain sm:max-h-[60vh] 
        md:object-cover md:max-h-[64vh]
      "
                        />
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Hero;
