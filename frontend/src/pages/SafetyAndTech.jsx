import React from 'react'
import Landing from '../Components/saftey/landing'
import SafetyMeasures from '../Components/saftey/SafetyMeasures'
import TechAndAi from '../Components/saftey/TechAndAi'
// import Choice from '../components/Bestchoice'
import Choice from '../Components/Bestchoice'
// import Fleets from '../components/Fleets'
import Fleets from '../Components/Fleets'
// import OurPresence from '../components/OurPresence'
import OurPresence from '../components/OurPresence'

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
       <Footer/>
      </div>
  )
}

export default SafteyAndTech