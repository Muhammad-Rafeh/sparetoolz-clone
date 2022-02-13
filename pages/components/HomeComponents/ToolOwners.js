import styles from '../../../styles/ToolOwners.module.css';


function ToolOwners() {
    return (
        <div className={styles.container}>


            <div className="row" className={styles.questionWrapper}>
                 <h1 className="col" className={styles.question}>Who is <span>logo</span> for?</h1>
            </div>

            <div className={"row "+styles.gridWrapper}>
                <div className={"container "+styles.abc}>
                    <div className=" d-flex flex-column flex-md-row justify-content-center">
                        <div className="col-md-4">
                            <h2 className={styles.toolOwnersHeading}>
                                TOOL OWNERS
                            </h2>
                            <div className={styles.toolOwnersP}>
                            Do you have spare tools & equipment sitting around in your garage, doing nothing? (Remember how much you paid for them?)
                            </div>
                            <img className={styles.wrentchImage} src="/wrentchImage.png" />
                        </div>
                        <div className={" col-md-8 "+styles.stepsWrapper}>
                            <div className={" d-flex flex-column flex-md-row mx-auto justify-content-start justify-content-md-center "+styles.stepsContent}>
                                <div className={"col d-flex align-self-start flex-row flex-md-column  "}>
                                    <p className={styles.stepsCount}>1</p>
                                    <img className={styles.stepImg+" "+styles.stepImg1} src="/toolOwnersImg1.png"/>
                                    <p className={styles.stepDesc+" "+styles.stepDesc1}>Set up your account</p>
                                </div>
                                <div className={" col d-flex align-self-start flex-row flex-md-column "}>
                                    <p className={styles.stepsCount}>2</p>
                                    <img className={styles.stepImg+" "+styles.stepImg2} src="/toolOwnersImg2.png"/>
                                    <p className={styles.stepDesc+" "+styles.stepDesc2}>Take photos of your tools & list them</p>
                                </div>
                                <div className={" col d-flex align-self-start flex-row flex-md-column "}>
                                    <p className={styles.stepsCount}>3</p>
                                    <img className={styles.stepImg+" "+styles.stepImg3} src="/toolOwnersImg3b.png"/>
                                    <p className={styles.stepDesc+" "+styles.stepDesc3}>Set your rental rates (by day/week)</p>
                                </div>
                                <div className={" col d-flex align-self-start flex-row flex-md-column "}>
                                    <p className={styles.stepsCount}>4</p>
                                    <img className={styles.stepImg+" "+styles.stepImg4} src="/toolOwnersImg4.png"/>
                                    <p className={styles.stepDesc+" "+styles.stepDesc4}>Make money with your spare tools!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ToolOwners
