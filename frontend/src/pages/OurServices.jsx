import React from 'react';
import Ourservices from '../Components/Ourservices';
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";
import OnSpotRentalsForm from '../Components/Booking';
import FleetSection from '../Components/OScomponents/FleetSection';
import Choice from '../Components/Bestchoice';
import Os from '../Components/OScomponents/Os';
import Fleets from '../Components/Fleets';
function OurServices() {
    
    return (
        <>
            {/* <Navbar /> */}
            <FleetSection/>
            <br />
            <OnSpotRentalsForm/>
            <br />

           <Os/>
    
            <Fleets/>
             <br />
             <br />
            
            <Getintouch />
        </>
    );
}

export default OurServices;