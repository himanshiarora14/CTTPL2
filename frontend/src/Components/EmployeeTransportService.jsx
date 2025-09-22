import React from 'react';
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";
import OnSpotRentalsForm from '../Components/Booking';
import FleetBestChoice from './SchoolFleetServices/FleetBestChoice';
import Fleets from '../Components/Fleets';
import DrivingWorkforce from './OScomponents/DrivingWorkforce';
import EmployeeTransport from './OScomponents/EmployeeTransport';
import SafetyComfortCompliance from './OScomponents/SafetyComfortCompliance';
function EmployeeTransportService() {
    
    return (
        <>
            {/* <Navbar /> */}
            <DrivingWorkforce/>
            <br />
            <OnSpotRentalsForm/>
            <br />
            <EmployeeTransport/>
            <SafetyComfortCompliance/>
            <FleetBestChoice/>
            <Fleets/>
             <br />
             <br />
            
            <Getintouch />
        </>
    );
}

export default EmployeeTransportService;