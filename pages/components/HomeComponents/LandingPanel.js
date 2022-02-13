import Nav from './Nav';
import styles from '../../../styles/LandingPanel.module.css';
import Image from 'next/image';
const backgroundGraphic = require('../../../images/backgroundGraphic.png');
// const phoneImg = require('../../../images/phone.png');
import phoneImg from '../../../public/phone.png'

function LandingPanel() {
    return (
        <div className={styles.container1}>
            <Nav />

            <div className={styles.navSpaceFiller}></div>

            <div className={styles.container}>
                <div className="d-flex flex-md-row flex-column-reverse row" >
                    <div className="col" className={styles.landingPanelInfoWidth}>
                        <div className={styles.downloadCallWrapper} >
                            <div>DOWNLOAD</div>
                        </div>

                        <div className={styles.sloganWrapper}>
                            the tool rental app you've been waiting for!
                        </div>
                        <div className={styles.landingPanelSmallDesc}>
                            Sparetoolz helps you make & save money with peer-to-peer tool rental in your community.
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <div className={styles.appleStoreButtonWrapper}>
                                <a href="#"><img className={styles.buttonImg} src='/appleStoreButton.png' /></a>
                            </div>
                            <div className={styles.googleStoreButtonWrapper}>
                                <a href="#"><img className={styles.buttonImg} src='/googlePlayStore.png' /></a>
                                <div className={styles.comingSoon} >Coming Soon</div>
                            </div>
                        </div>    
                    </div>
                    <div className="col LandingPanelbackGroundHraohicWrapper" >
                        <img src="/backgroundGraphic.png" className={styles.backgroundGraphicImg} />
                    </div>
                    <div className="col landing-panel-phone-img-size" >
                        <img src='/phone.png' className='phone-image' />
                    </div>
                </div>
            </div>
           
            
        </div>
    )
}

export default LandingPanel
