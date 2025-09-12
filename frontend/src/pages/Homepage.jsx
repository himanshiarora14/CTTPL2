// import Navbar from "../Components/Navbar";
import Ourservices from "../Components/Ourservices";
import Fleets from "../Components/Fleets";
import Seamless from "../Components/Seamless";
import Getintouch from "../Components/Getintouch";
import Choice from "../Components/Bestchoice";
import Hero from "../Components/Hero";
import OurClient from "../Components/OurClient";
import Ournumbers from "../Components/Ournumbers";
import OurPresence from "../Components/OurPresence";
import Comments from "../Components/Comments";

function Homepage() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero/>
            <OurClient/>
            <Seamless />
            <Ourservices />
            <Choice/>
            <Ournumbers/>
            <OurPresence/>
            <Fleets />
            <Comments/>
            <Getintouch />
        </>
    );
}

export default Homepage;