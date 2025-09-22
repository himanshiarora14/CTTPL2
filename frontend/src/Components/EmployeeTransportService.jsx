import React from 'react';
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";
import OnSpotRentalsForm from '../Components/Booking';
import Choice from '../Components/Bestchoice';
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
            <Choice/>
            <Fleets/>
             <br />
             <br />
            
            <Getintouch />
        </>
    );
}

export default EmployeeTransportService;