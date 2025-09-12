import React from 'react'
import Landing from '../components/saftey/landing'
import SafetyMeasures from '../components/saftey/SafetyMeasures'
import TechAndAi from '../components/saftey/TechAndAi'
// import Choice from '../components/Bestchoice'
import Choice from '../components/Bestchoice'
// import Fleets from '../components/Fleets'
import Fleets from '../components/Fleets'
// import OurPresence from '../components/OurPresence'
import OurPresence from '../components/OurPresence'

// import ContactSection from '../components/Getintouch'
import ContactSection from '../components/Getintouch'
import Footer from '../components/Footer'


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