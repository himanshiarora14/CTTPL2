import Navbar from "../Components/Navbar";
import Ourservices from "../Components/Ourservices";
import Fleets from "../Components/Fleets";
import Seamless from "../Components/Seamless";
import Getintouch from "../Components/Getintouch";
import Choice from "../Components/Bestchoice";
import Ournumbers from "../Components/Ournumbers";

function Homepage() {
    return (
        <>
            <Navbar />
            <Seamless />
            <Ourservices />
            <Choice/>
            <Ournumbers/>
            <Fleets />
            <Getintouch />
        </>
    );
}

export default Homepage;