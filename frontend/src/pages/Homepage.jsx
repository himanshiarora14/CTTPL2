import Navbar from "../Components/Navbar";
import Ourservices from "../Components/Ourservices";
import Fleets from "../Components/Fleets";
import Seamless from "../Components/Seamless";
import Getintouch from "../Components/Getintouch";

function Homepage() {
    return (
        <>
            <Navbar />
            <Seamless />
            <Ourservices />
            <Fleets />
            <Getintouch />
        </>
    );
}

export default Homepage;