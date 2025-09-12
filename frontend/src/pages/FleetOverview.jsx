import Fleethero from "../Components/Fleethero";
import Choice from "../Components/Bestchoice";
import Fleets from "../Components/Fleets";
import OurPresence from "../Components/OurPresence";
import ContactSection from "../Components/Getintouch";
import Comments from "../Components/Comments";

function FleetOverview() {
    return ( 
        <>
        <Fleethero/>
        <Comments/>
        <Choice/>
        <Fleets/>
        <OurPresence/>
        <ContactSection/>
        </>
     );
}

export default FleetOverview;