import React from 'react'
import styles from './OurClient.module.css'

const OurClient = () => {
  return (
    <section className={styles.mainContainer}>
        <div className={styles.InnerClientContainer}>
            <div className={styles.clientHeading}>Our <span className={styles.clientHeadingSpan}>Clientele</span></div>

            <p className={styles.Description}>Delivering seamless transport services to top corporates and organizations nationwide, trusted by industry leaders for our unmatched fleet, reliability, and service excellence.</p>

            <div className={styles.brandsLogoContainer}>
                <img src="/coforge.svg" alt="" />
                <img src="/airtel.svg" alt="" />
                <img src="/metlife.svg" alt="" />
                <img src="/tata.svg" alt="" />
                <img src="/fiserv.svg" alt="" />
                <img src="/samsung.svg" alt="" />
                <img src="/logo_dps" alt="" />
                <img src="/jio.svg" alt="" />
                <img src="/dalima.svg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default OurClient