import React from 'react'
import OurStructureHero from '../Components/ourStructure/HeroOurStructure'
import TeamAndResponsibility from '../Components/ourStructure/TeamAndResponsibility'
import TeamsSection from '../Components/ourStructure/TeamsCard'
import ReportingStructure from '../Components/ourStructure/ReportingStructure'
import BestChoice from '../Components/Bestchoice'
import Fleets from '../Components/Fleets'
import OurPresence from '../Components/OurPresence'
import ContactSection from '../Components/Getintouch'

const OurStructure = () => {
  return (
    <div>
        <OurStructureHero/>
        <TeamAndResponsibility/>
        <TeamsSection/>
        <ReportingStructure/>
        <BestChoice/>
        <Fleets/>
        <OurPresence/>
        <ContactSection/>
    </div>
  )
}

export default OurStructure