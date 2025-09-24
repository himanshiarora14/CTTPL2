import React from 'react'

const TeamAndResponsibility = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6'>
      <div className='flex justify-center items-center w-full'>
        <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight'>
          Teams &<span className='text-[#EC221F]'> Responsibilities</span>
        </h2>
      </div>

      <div className='flex justify-center items-center w-full max-w-4xl mx-auto'>
        <p className='font-normal text-sm sm:text-base md:text-md text-center leading-relaxed px-2 sm:px-4 md:px-0'>
          At CTTPL, our teams and team members are recognized as one of the best in the nation. Each team is specialized in its area of expertise, bringing a wealth of knowledge, skills, and experience that contributes to the overall success of the business. Our commitment to ongoing training and development empowers our staff to excel in their roles, fostering a culture of excellence that is reflected in our service. This collective expertise allows the company to not only meet but exceed customer expectations, building long-term relationships, enhancing operational efficiency, and driving business growth.
        </p>
      </div>
    </div>
  )
}

export default TeamAndResponsibility
