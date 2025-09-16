import React from 'react';
// import CompanyOverView from '../Components/CompanyOverView';
// import TeamsSection from '../Components/Team';
import Getintouch from '../Components/Getintouch';
// import Footer1 from '../Components/Aboutus/Footer1';
import Ournation from '../Components/Aboutus/Ournation';
import Ourservices from '../Components/Ourservices';
import Bestchoice from '../Components/Aboutus/Bestchoice';
import Fleets from '../Components/Fleets';
import Leadership from '../Components/Aboutus/Leadership';
import Mission from '../Components/Aboutus/Mission';
import Box from '../Components/Aboutus/Box';
import Inception from '../Components/Aboutus/Inception';
import Page1 from '../Components/Aboutus/Page1';
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
        <Fleets/>
      <Ournation />
       <Getintouch />
       {/* <Footer1/> */}
      
      
      
    </div>
  );
};

export default AboutPage;

