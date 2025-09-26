import img from '../../images/careers.png'
import Main from '../Button/Main';

const GrowWithUs = () => {
  return (
    <Main
      embedded="Powered by People"
      heading={
        <>
          <span className="text-red-600">Grow</span> with Us &
          <br />
          Move with Us
        </>
      }
      paragraph="At CTTPL, we believe our people drive our success. Be part of a culture built on integrity, innovation, and growth-where every role contributes to keeping India moving."
      image={img}
    />
  );
};

export default GrowWithUs;