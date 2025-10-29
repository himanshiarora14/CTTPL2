import Contact from '../Button/Contact'
import Embedded from '../Button/Embedded'
import img from '../../images/fleets.png'
import Main from '../Button/Main';

const Hero = () => {
    return (
        <Main
            embedded="OUR DIVERSE FLEET"
            heading={
                <>
                    <span className="text-red-500">Exclusive Fleet,</span>
                    <br />Tailored for You
                </>
            }
            paragraph="From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles. Choose comfort, safety, and reliability — every journey, every time."
            image={img}
        />
    );
};

export default Hero;
