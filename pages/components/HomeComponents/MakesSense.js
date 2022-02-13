import styles from '../../../styles/MakesSense.module.css';

function MakesSense() {
    return (
        <div className="container">
            <div className={styles.topSpace}></div>
            <div>
                <h2 className={styles.question}>Why <span>Logo</span> makes sense</h2>
            </div>
            <div className="d-flex justify-content-center flex-column flex-md-row flex-wrap">
                <div className="  col-md-3 text-center">
                    <div className={styles.imgWrapper}>
                        <img src='/makesSenseImg1.png' className={styles.imgs}/>
                    </div>
                    
                    <h3 className={styles.heading}>Conveniently Located</h3>
                    <p className={styles.data}>Avoid the hassle of driving to the store & waiting in long lines</p>
                </div>
                <div className=" col-md-3 text-center">
                    <div className={styles.imgWrapper}>
                        <img src='/makesSenseImg2.png' className={styles.imgs}/>
                    </div>
                    <h3 className={styles.heading}>More Affordable</h3>
                    <p className={styles.data}>Pay less than you would at big box retailers & corporations</p>
                </div>
                <div className=" col-md-3 text-center">
                    <div className={styles.imgWrapper}>
                        <img src='/makesSenseImg3.png' className={styles.imgs}/>
                    </div>
                    <h3 className={styles.heading}>Support Local Economy</h3>
                    <p className={styles.data}>Keep money in your community, working directly with your neighbors</p>
                </div>
                <div className="  col-md-3 text-center">
                    <div className={styles.imgWrapper}>
                        <img src='/makesSenseImg4.png' className={styles.imgs}/>
                    </div>
                    <h3 className={styles.heading}>Save Space</h3>
                    <p className={styles.data}>Avoid cluttering up your garage, attic, & storage space</p>
                </div>
                <div className=" col-md-3 text-center">
                    <div className={styles.imgWrapper}>
                        <img src='/makesSenseImg5.png' className={styles.imgs}/>
                    </div>
                    <h3 className={styles.heading}>Prevent Waste</h3>
                    <p className={styles.data}>Reduce landfill waste by renting (instead of buying & discarding) infrequently used tools</p>
                </div>
            </div>
            
        </div>
    )
}

export default MakesSense
