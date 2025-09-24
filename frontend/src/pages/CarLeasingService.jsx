import React from 'react'
import HeroCarLeasing from '../Components/CarLeasingServices/HeroCarLeasing'
import OnSpotRentalsForm from '../Components/Booking'
import FleetBestChoice from '../Components/SchoolFleetServices/FleetBestChoice'
import Fleets from '../Components/Fleets'
import ContactSection from '../Components/Getintouch'
import ReachOptions from '../Components/CarLeasingServices/ReachOptions'

const CarLeasingService = () => {
  return (
    <div>
        <HeroCarLeasing/>
        <OnSpotRentalsForm/>
        {/* 1 section remaining */}
        <ReachOptions/>
        <FleetBestChoice/>
        <Fleets/>
        <ContactSection/>
    </div>
  )
}

export default CarLeasingService