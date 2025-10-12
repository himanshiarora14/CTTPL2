// import Navbar from "../Components/Navbar";
import Ourservices from "../Components/Ourservices";
import Fleets from "../Components/Fleets";
import Seamless from "../Components/Seamless";
import Getintouch from "../Components/Getintouch";
import Choice from "../Components/Bestchoice";
import Hero from "../Components/Hero";
import OurClient from "../components/OurClient";
import Ournumbers from "../Components/Ournumbers";
import OurPresence from "../Components/OurPresence";
import Comments from "../Components/Comments";
import OnSpotRentalsForm from '../Components/Booking';
import FleetSection from "../Components/BrowseOurFleet";

function Homepage() {
    return (
        <>
            <Hero/>
            <OnSpotRentalsForm/>
            <OurClient/>
            <Seamless />
            <Ourservices />
            <Choice/>
            <Ournumbers/>
            <OurPresence/>
            <Fleets />
            <FleetSection/>
            <Comments/>
            <Getintouch />
        </>
    );
}

export default Homepage;