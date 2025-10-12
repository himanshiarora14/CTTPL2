import React from 'react'
import Landing from '../Components/saftey/Landing'
import SafetyMeasures from '../Components/saftey/SafetyMeasures'
import TechAndAi from '../Components/saftey/TechAndAi'
import Choice from '../Components/Bestchoice'
import Fleets from '../Components/Fleets'
// import OurPresence from '../components/OurPresence'
// import OurPresence from '../Components/OurPresence'
import OurPresence from "../Components/OurPresence"

// import ContactSection from '../components/Getintouch'
import ContactSection from '../Components/Getintouch'
import Footer from '../Components/Footer'


const SafteyAndTech = () => {
  return (
    <div>
       <Landing/>
       <SafetyMeasures/>
       <TechAndAi/>
       <Choice/>
       <Fleets/>
       <OurPresence/>
       <ContactSection/>
      </div>
  )
}

export default SafteyAndTech