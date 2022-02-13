import styles from '../../../styles/Form.module.css';

function Form() {
    return (
        <div className={styles.background}>
            <div className="container">
                <div className={styles.topSpace}></div>
                <h1 className={styles.interested} >Interested in Reaching Out?</h1>
                <p className={styles.info}>We’d love to hear from you!</p>
                <div className="d-flex justify-content-center flex-column col-lg-6 col-md-8 col-sm-10 col-12 m-auto">
                    <div className="col-12 d-flex flex-row justify-content-between">
                        <div className='col-6'>
                            <p className={styles.label}>FIRST NAME*</p>
                            <div className="mx-1 mb-3">
                                <input className={styles.input} type="text" />
                            </div>
                            
                        </div>
                        <div className='col-6'>
                            <p className={styles.label}>LAST NAME*</p>
                            <div className="mx-1 mb-3">
                                <input className={styles.input} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-row justify-content-between">
                        <div className='col-6'>
                            <p className={styles.label}>EMAIL*</p>
                            <div className="mx-1 mb-3">
                                <input className={styles.input} type="text" />
                            </div>
                        </div>
                        <div className='col-6'>
                            <p className={styles.label}>COMPANY NAME</p>
                            <div className="mx-1 mb-3">
                                <input className={styles.input} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-row justify-content-center">
                        <div className={"col-12 "}>
                            <p className={styles.label}>MESSAGE</p>
                            <div className="mx-1 col-12">
                                <input className={styles.input+ " col-12"} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <button className={styles.button+" text-center"}>SUBMIT</button>

                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Form
