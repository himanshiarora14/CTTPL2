import Main from '../Button/Main'
import img from '../../images/car1.png'

const HeroCarLeasing = () => {
    return (
        <Main
            embedded="OUR DIVERSE FLEET"
            heading={
                <>
                    <span className="text-[#EC221F]"> Lease Your <br></br> Car </span>With Ease
                </>
            }
            paragraph="From luxury sedans to economy cars and premium coaches, CTTPL offers a wide range of vehicles. Choose comfort, safety, and reliability — every journey, every time."
            image={img}
        />
    )
}

export default HeroCarLeasing