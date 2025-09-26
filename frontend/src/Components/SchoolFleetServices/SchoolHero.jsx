import React from 'react'
import Contact from "../Button/Contact"
import Embedded from "../Button/Embedded"
import Main from '../Button/Main'

const SchoolHero = () => {
    return (
        <Main
            embedded="OUR DIVERSE FLEET"
            heading={
                <>
                    <span className="text-[#EC221F]">Safe Journeys, </span><br />
                    Bright Futures
                </>
            }
            paragraph="From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles. Choose comfort, safety, and reliability — every journey, every time."
            image={"/assets/school_bus.png"}
        />
    )
}

export default SchoolHero