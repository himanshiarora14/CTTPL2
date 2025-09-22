import React from 'react';
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";
import OnSpotRentalsForm from '../Components/Booking';
import FleetBestChoice from './SchoolFleetServices/FleetBestChoice';
import Fleets from '../Components/Fleets';
import DS from './OScomponents/DS';
import Scc from './SchoolFleetServices/Scc';
import EF from './EF';
function ElectricFleetServices() {
    
    return (
        <>
            {/* <Navbar /> */}
            <DS/>
            <br />
            <OnSpotRentalsForm/>
            
            <br />
             <EF/>
            <Scc/>
            <FleetBestChoice/>
            <Fleets/>
             <br />
             <br />
            
            <Getintouch />
        </>
    );
}

export default ElectricFleetServices;