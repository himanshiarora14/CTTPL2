import img from '../../images/bus11.png';
import Main from "../Button/Main";

const Landing = () => {
  return (
    <Main
      embedded="SAFETY MEETS INNOVATION"
      heading={
        <>
          <span className="text-[#EC221F]">Tech-Driven</span> <br />
          Safety, Always On
        </>
      }
      paragraph="From GPS monitoring and panic buttons to AI-powered controls, we're redefining secure travel across India with a 24/7 control centre for unmatched reliability."
      image={img}
    />
  );
};

export default Landing;
