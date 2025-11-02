import React from "react";
import bus2 from "../../images/team/os.png";
import Main from "../Button/Main";

const FleetSection = () => {
    return (
        <Main
            embedded="OUR DIVERSE FLEET"
            heading={
                <>
                    Trusted <span className="text-red-500">Services,</span><br />
                    Seamless Journeys
                </>
            }
            paragraph="From luxury sedans to economy cars and premium coaches, CTPL
                       offers a wide range of vehicles. Choose comfort, safety, and
                       reliability – every journey, every time."
            image={bus2}
        />
    );
};

export default FleetSection;
