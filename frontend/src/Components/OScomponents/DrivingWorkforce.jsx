import Main from "../Button/Main";
import bus2 from "../../images/bus6.png";


const DrivingWorkforce = () => {
  return (
     <Main
      embedded="OUR DIVERSE FLEET"
      heading={
        <>
          <span className="text-red-500">Driving Workforce</span><br />
           Productivity
        </>
      }
      paragraph="From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles. Choose comfort, safety, and reliability — every journey, every time."
      image={bus2}
    />
  );
};

export default DrivingWorkforce;
