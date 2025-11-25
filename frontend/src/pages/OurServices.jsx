import React from 'react';
import Getintouch from "../Components/Getintouch";
import FleetSection from '../Components/OScomponents/FleetSection';
import Os from '../Components/OScomponents/Os';
import Fleets from '../Components/Fleets';
function OurServices() {
    
    return (
        <>
            {/* <Navbar /> */}
            <FleetSection/>
            <br />
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