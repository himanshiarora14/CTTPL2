import React from 'react'
import Landing from '../components/saftey/landing'
import SafetyMeasures from '../components/saftey/SafetyMeasures'
import TechAndAi from '../components/saftey/TechAndAi'
import Choice from '../components/Bestchoice'
import Fleets from '../components/Fleets'
import OurPresence from '../components/OurPresence'
import ContactSection from '../components/Getintouch'


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