import Image from 'next/image';
import styles from '../../../styles/MakesItEasy.module.css';

function MakesItEasy() {
    return (
        <div className={styles.background}>

<div className={"container "}>
            <div className={styles.topSpace}></div>
                <div className="d-flex flex-column flex-sm-column flex-md-row-reverse justify-content-center">
                    <div className=" col-12 col-sm-12 col-md-7 ">
                        <div className="d-flex flex-column justify-content-center" >
                            <h2 className={styles.question}><span>Logo</span> makes it easy</h2>
                            <div className={" d-flex flex-column flex-sm-column flex-md-row "}>
                                <div className="d-flex flex-column col-md-6 ">
                                    <div className={"d-flex flex-row mb-5 "+styles.infoWrapper}>
                                        <div className={"p-4 border rounded bg-white "+styles.imgsBg}>
                                            <img src="/bookingImg1.png" />
                                        </div>
                                        <div>
                                            <h5 className={styles.heading}>Secure transaction</h5>
                                            <p className={styles.data}>Safe & secure payent pocessing partners.</p>
                                        </div>
                                    </div>
                                    <div className={"d-flex flex-row mb-5 "+styles.infoWrapper}>
                                        <div className={"p-4 border rounded bg-white "+styles.imgsBg}>
                                            <img src="/makesItEasyImg3.png"  />
                                        </div>
                                        <div>
                                            <h5 className={styles.heading}>Rent by the hour (coming soon), day, week, or month</h5>
                                            <p className={styles.data}>Easily flexible for a busy schedule</p>
                                        </div>
                                    </div>
                                    <div className={"d-flex flex-row mb-5 "+styles.infoWrapper}>
                                        <div className={"p-4 border rounded bg-white "+styles.imgsBg}>
                                            <img src="/makesItEasyImg5.png" />
                                        </div>
                                        <div>
                                            <h5 className={styles.heading}>Awesome customer support</h5>
                                            <p className={styles.data}>The most critical tool of all!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-sm-12 col-md-6">
                                    <div className={"d-flex flex-row mb-5 "+styles.infoWrapper}>
                                        <div className={"p-4 border rounded bg-white "+styles.imgsBg}>
                                            <img src="/makesItEasyImg2.png"  />
                                        </div>
                                        <div>
                                            <h5 className={styles.heading}>Validated profiles</h5>
                                            <p className={styles.data}>Ensuring all our users are who they say they are</p>
                                        </div>
                                    </div>
                                    <div className={"d-flex flex-row mb-5 "+styles.infoWrapper}>
                                        <div className={"p-4 border rounded bg-white "+styles.imgsBg}>
                                            <img src="/makesItEasyImg4.png"/>
                                        </div>
                                        <div>
                                            <h5 className={styles.heading}>Optional tool training & delivery</h5>
                                            <p className={styles.data}>Make more money by offering training & delivery for the tools you rent out</p>
                                        </div>
                                    </div>
                                    <div className={"d-flex flex-row mb-5 "+styles.infoWrapper}>
                                        <div className={"p-4 border rounded bg-white "+styles.imgsBg}>
                                            <img src="/makesItEasyImg6.png"/>
                                        </div>
                                        <div>
                                            <h5 className={styles.heading}>Rent near you</h5>
                                            <p className={styles.data}>Support your local economy by renting right in your community</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-flex col-12 col-sm-12 col-md-5 justify-content-center justify-content-md-end">
                        <img src="/bookingPhone.png" className={styles.bookingPhone } />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default MakesItEasy
