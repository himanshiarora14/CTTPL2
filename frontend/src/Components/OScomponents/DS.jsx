import React from "react";
import bus2 from "../../images/bus10.png";
import Main from "../Button/Main";

const DS = () => {
  return (
    <Main
      embedded="OUR DIVERSE FLEET"
      heading={
        <>
          Driving <span className="text-red-500">Sustainably</span><br></br>
          Thinking Green
        </>
      }
      paragraph="From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles. Choose comfort, safety, and reliability — every journey, every time."
      image={bus2}
    />
  );
};

export default DS;
