import React from 'react'
import ContactSection from '../components/Getintouch'
import CompanyOverView from '../components/CompanyOverView'
import TeamsSection from '../components/Team'
import Getintouch from '../components/Getintouch'

const AboutPage = () => {
  return (
    <div>
      <CompanyOverView/>
      <TeamsSection/>
      <Getintouch/>
      <ContactSection/>
    </div>
  )
}

export default AboutPage