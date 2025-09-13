import React from 'react';
// import CompanyOverView from '../Components/CompanyOverView';
// import TeamsSection from '../Components/Team';
import Getintouch from '../Components/Getintouch';
import Footer1 from '../Components/Footer1';
import Ournation from '../Components/Ournation';
import Ourservices from '../Components/Ourservices';
import Bestchoice from '../Components/Bestchoice';
import Fleets1 from '../Components/Fleets1';
import Leadership from '../Components/Leadership';
import Mission from '../Components/Mission';
import Box from '../Components/Box';
import Inception from '../Components/Inception';
import Page1 from '../Components/Page1';
const AboutPage = () => {
  return (
    <div>
      {/* <CompanyOverView />
      <TeamsSection /> */}
      <Page1/>
      <Inception/>
     <Box/>
      <Mission/>
      <Ourservices />
       <Leadership/>
        <Bestchoice/>
        <Fleets1/>
      <Ournation />
       <Getintouch />
       <Footer1/>
      
      
      
    </div>
  );
};

export default AboutPage;

