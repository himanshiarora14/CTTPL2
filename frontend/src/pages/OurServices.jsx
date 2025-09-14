import React from 'react';
import Ourservices from '../Components/Ourservices';
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";
import OnSpotRentalsForm from '../Components/Booking';
import FleetSection from '../Components/FleetSection';
import Choice from '../Components/Bestchoice';
import Seamless from '../Components/Seamless';
function OurServices() {
    
    return (
        <>
            {/* <Navbar /> */}
            <br />
            <br />
            <FleetSection/>
            <br />
            <br />

            <Ourservices/>
            <br />
            <br />
            <Choice/>
            <br />
            <br />
            <Seamless/>
            <OnSpotRentalsForm/>
             <br />
             <br />
            
            <Getintouch />
        </>
    );
}

export default OurServices;