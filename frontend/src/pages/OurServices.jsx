import React from 'react';
import Ourservices from "../Components/Ourservices";
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";
import OnSpotRentalsForm from '../Components/Booking';
import FleetCard from '../Components/Electricfleet';
function OurServices() {
    return (
        <>
            {/* <Navbar /> */}
            <Ourservices />
            <br />
            <br />

            <OnSpotRentalsForm/>
             <br />
            <br />
            <FleetCard/>
            <Getintouch />
            <Footer/>
        </>
    );
}

export default OurServices;