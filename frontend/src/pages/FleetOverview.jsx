import Fleethero from "../Components/Fleethero";
import Choice from "../Components/Bestchoice";
import Fleets from "../Components/Fleets";
// import OurPresence from "../Components/OurPresence.jsx";
import Ourpresence2 from "../Components/Ourpresence2";
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
        <Ourpresence2/>
        <ContactSection/>
        </>
     );
}

export default FleetOverview;