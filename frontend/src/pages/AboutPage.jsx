import React from 'react'
import CompanyOverView from '../components/CompanyOverView'
import TeamsSection from '../components/Team'
import Getintouch from '../components/Getintouch'

const AboutPage = () => {
  return (
    <div>
      <CompanyOverView/>
      <TeamsSection/>
      <Getintouch/>
    </div>
  )
}

export default AboutPage