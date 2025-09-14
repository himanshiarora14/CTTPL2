// import Navbar from "../Components/Navbar";
import Ourservices from "../Components/Ourservices";
import Fleets from "../Components/Fleets";
import Seamless from "../Components/Seamless";
import Getintouch from "../Components/Getintouch";
import Choice from "../Components/Bestchoice";
import Hero from "../components/Hero";
import OurClient from "../components/OurClient";
import Ournumbers from "../Components/Ournumbers";
import OurPresence from "../components/OurPresence";
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