import React from 'react';
import Getintouch from "../Components/Getintouch";
import OnSpotRentalsForm from '../Components/Booking';
import FleetSection from '../Components/OScomponents/FleetSection';
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