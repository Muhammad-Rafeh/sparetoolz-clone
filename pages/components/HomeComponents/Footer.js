import styles from '../../../styles/Footer.module.css';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';




function Footer() {
    return (
        <div className={styles.background}>
             <div className={styles.topSpace}></div>
            <div className={styles.line}></div>
            <div className="container">
                <div className={styles.spaceAboveLogo}></div>
               <div className={styles.logo + " text-center"}>
                   Logo
                </div>
                <div className={styles.spaceBeneathLogo}></div>
                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-md-start align-items-center">
                    <div className="col-md-4 col-4 text-center text-md-start">
                        <h3 className={styles.h3+" text-center text-md-start"}>INFO</h3>
                        <p className={styles.p}>Features</p>
                        <p className={styles.p}>Info / FAQ</p>
                        <p className={styles.p}>Blog</p>
                        <p className={styles.p}>About</p>
                        <p className={styles.p}>Brand Assets</p>
                        <p className={styles.p}>Refund policy</p>
                    </div>
                    <div className="col-md-4 col-12 text-center text-md-start">
                        <h3 className={styles.h3+" text-center text-md-start"}>LEGAL</h3>
                        <p className={styles.p}>Privacy Policy</p>
                        <p className={styles.p}>Terms and Conditions</p>
                    </div>
                    <div className="col-md-4 col-12 text-center text-md-start">
                        <h3 className={styles.h3+" text-center text-md-start"}>SOCIAL</h3>
                        <div className='d-flex flex-row justify-content-md-start justify-content-center text-center text-md-start'>
                            <div className={styles.iconbg+" text-center text-md-start"}>
                                <FaFacebookSquare />
                               

                            </div>
                            <div className={styles.iconbg+" text-center text-md-start"}>
                                <FaTwitter />
                            </div>
                            <div className={styles.iconbg+" text-center text-md-start"}>
                                  <FaInstagram />
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className={styles.endt+ " text-center"}>©Copyright 2021 - Sparetoolz</div>
                <div className={styles.endt+ " text-center"}>Designed and Developed with  by  ...</div>
                <div className={styles.endSpace}></div>
            </div>
        </div>
        
    )
}

export default Footer
