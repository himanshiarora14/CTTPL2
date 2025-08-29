import React from 'react'
import styles from './Hero.module.css'
import BusImg from '../assets/HeroBusImage.svg'
import callIcon from '../assets/call.svg'

const Hero = () => {
    return (
        <div className={styles.HeroMainContainer}>
            <div className={styles.HeroInnerContainer}>
                {/* left section */}
                <div className={styles.HeadingsContainer}>
                    <div className={styles.headingsAndSubHeadings}>
                        <div className={styles.Headings}>
                            <div className={styles.techEnabled}><p className={styles.techEnabledText}>TECH-ENABLED TRAVEL</p></div>
                            <p className={styles.MainHeading}>Driving Values,<br /> <span className={styles.MainHeadingSpan}>Delivering</span> Results</p>
                        </div>

                        <div className={styles.description}>
                            <p className={styles.Desc}>Experience comfort, reliability, and tech-enabled journeys with India’s leading travel partner—trusted by travellers and businesses alike.</p>
                            <button className={styles.ContactUsBtn}>
                                <span className={styles.contactUs}>Contact Us</span>
                                <img src={callIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* right section  img*/}
                <img src={BusImg} alt="" className={styles.HeroImage} />
            </div>
        </div>
    )
}

export default Hero