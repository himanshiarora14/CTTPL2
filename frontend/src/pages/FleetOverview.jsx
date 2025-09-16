import Fleethero from "../Components/Fleethero";
import Choice from "../Components/Bestchoice";
import Fleets from "../Components/Fleets";
import OurPresence from "../Components/OurPresence";
import ContactSection from "../Components/Getintouch";
import Comments from "../Components/Comments";
import OnSpotRentalsForm from '../Components/Booking';

function FleetOverview() {
    return ( 
        <>
        <Fleethero/>
        <OnSpotRentalsForm/>
        <Comments/>
        <Choice/>
        <Fleets/>
        <OurPresence/>
        <ContactSection/>
        </>
     );
}

export default FleetOverview;