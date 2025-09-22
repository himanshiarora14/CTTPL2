import React from 'react'
import SchoolHero from '../Components/SchoolFleetServices/SchoolHero'
import OnSpotRentalsForm from '../Components/Booking'
import FleetServices from '../Components/SchoolFleetServices/FleetServices'
import Fleets from '../Components/Fleets'
import ContactSection from '../Components/Getintouch'
import Scc from '../Components/SchoolFleetServices/Scc'
import FleetBestChoice from '../Components/SchoolFleetServices/FleetBestChoice'


const SchoolFleetService = () => {
  return (
    <div>
        <SchoolHero/>
        <OnSpotRentalsForm/>
        <FleetServices/>
        <Scc/>
        <FleetBestChoice/>

        <Fleets/>
        <ContactSection/>
    </div>
  )
}

export default SchoolFleetService