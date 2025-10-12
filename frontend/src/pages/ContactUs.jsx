import Contact1st from "../Components/Contact1st";
import Contact2nd from "../Components/Contact2nd";
import Choice from "../Components/Bestchoice";
// import OurPresence from "../Components/OurPresence
import OurPresence2 from "../Components/Ourpresence2"
import ContactSection from "../Components/Getintouch";
import Fleets from "../Components/Fleets";
import OnSpotRentalsForm from '../Components/Booking';

function Contactus() {
    return (
        <>
            <Contact1st />
            <Contact2nd />
            <OnSpotRentalsForm/>
            <Choice />
            <Fleets />
            <OurPresence2 />
            <ContactSection />
        </>
    );
}

export default Contactus;