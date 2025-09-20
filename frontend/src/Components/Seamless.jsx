import busImage from '../images/seamless.png'; 

function Seamless() {
  return (
    <div className='flex justify-center items-center py-16 px-4'>
      <div className='max-w-6xl w-full flex flex-col lg:flex-row items-center'>
        <div className="lg:w-2/5 p-8">
          <img
            src={busImage}
            alt="tour bus driving"
            className="w-full h-full object-cover rounded-2xl shadow-lg" 
          />
        </div>
        
        <div className="lg:w-3/5 p-12 flex flex-col justify-center">

          <div className="mb-5">
            <span className=" text-xs font-semibold border-2 border-green-100 rounded-xl px-4 py-2 uppercase tracking-wider">
              Seamless Services
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Over<span className="text-red-600"> 35 Years of Experience</span> in Mobility Solutions
          </h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            Choudhary Tours & Travels Pvt. Ltd. (CTTPL) stands as a trusted leader in the transportation industry since three and a half decades, committed to delivering innovative and reliable solutions tailored to the diverse needs of employee transport services, car leasing services, dedicated fleet services, school fleet services, electric fleet services across India.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our unwavering commitment to excellence, safety, and customer satisfaction has established us as a benchmark in the industry. We look forward to continuing our journey of growth, innovation, and partnership, ensuring that we remain the preferred choice for all your transportation needs.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Seamless;