import Hero from "../Components/DedicatedFleet.jsx/Hero";
import SafetyMeasures from "../Components/DedicatedFleet.jsx/Dedicated2";
import OnSpotRentalsForm from '../Components/Booking'
import SafetyComfortCompliance from '../Components/OScomponents/SafetyComfortCompliance'
import FleetBestChoice from '../Components/SchoolFleetServices/FleetBestChoice'
import Fleets from '../Components/Fleets'
import ContactSection from '../Components/Getintouch'

function DedicatedService() {
    return ( 
        <>
        <Hero/>
        <OnSpotRentalsForm/>
        <SafetyMeasures/>
        <SafetyComfortCompliance/>
        <FleetBestChoice/>
        <Fleets/>
        <ContactSection/>
        </>
     );
}

export default DedicatedService;