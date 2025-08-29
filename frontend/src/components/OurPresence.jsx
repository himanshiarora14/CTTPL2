import React from "react";
import styles from "./OurPresence.module.css";


const cards = [
  {
    city: "Noida, UP",
    address: "B-99, Transport Nagar, Sector – 69, Noida – 201301",
    img: "/noida_up.png",
  },
  {
    city: "Gurugram, HR",
    address: "25, HUDA Market, Opposite KOD, Sector – 29, Gurugram – 122001",
    img: "/gurugram_hr.png",
  },
  {
    city: "Chennai, TN",
    address: "No. 185, Velachery Main Road, Selaiyur, Chennai – 600073",
    img: "/chennai_tn.png",
  },
  {
    city: "Bangalore, KA",
    address: "9th 10th Cross, Vinayaka Layout, Bhattarahalli Bangalore – 560049",
    img: "/banglore_ka.png",
  },
  {
    city: "Hyderabad, TL",
    address: "Villa # 455, Rainbow Meadows, Patelguda, Hyderabad – 502319",
    img: "/hydrabad.png",
  },
];

const OurPresence = () => {
  return (
    <section className={styles.MainContainer}>
      <div className={styles.HeadingContainer}>
        <p className={styles.heading}>
          Our Nationwide <span className={styles.headingSpan}>Presence</span>
        </p>
        <p className={styles.subHeading}>
          Our extensive network allows us to serve corporates, institutions, and
          travelers with the same commitment to safety, reliability, and
          comfort—no matter where your journey begins or ends.
        </p>
      </div>

      <div className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          {[...cards, ...cards].map((card, index) => (
            <div key={index} className={styles.marqueeCardContainer}>
              <img src={card.img} alt={card.city} className={styles.image} />
              <div className={styles.gradientOverlay}></div>
              <div className={styles.CardContent}>
                <p className={styles.City}>{card.city}</p>
                <p className={styles.address}>{card.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
