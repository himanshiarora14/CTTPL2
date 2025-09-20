import React from 'react';
import Getintouch from '../Components/Getintouch';
import Ournation from '../Components/Aboutus/Ournation';
import Ourservices from '../Components/Ourservices';
import Bestchoice from '../Components/Aboutus/Bestchoice';
import Fleets from '../Components/Fleets';
import Leadership from '../Components/Aboutus/Leadership';
import Mission from '../Components/Aboutus/Mission';
import Box from '../Components/Aboutus/Box';
import Inception from '../Components/Aboutus/Inception';
import Page1 from '../Components/Aboutus/Page1';
import Team from '../Components/Aboutus/Team';
import Gallery from './Gallery';

const AboutPage = () => {
  return (
    <div>
      <Page1 />
      <Inception />
      <Box />
      <Mission />
      <Ourservices />
      <Team/>
      <Leadership />
      <Bestchoice />
      <Fleets />
      <Ournation />
      <Getintouch />
      <Gallery/>
    </div>
  );
};

export default AboutPage;

