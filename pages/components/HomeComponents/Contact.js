import styles from '../../../styles/Contact.module.css';

function Contact() {
    return (
        <div className={styles.topSpace}>
            <div className={"d-flex flex-column justify-content-center "+styles.background}>
                <h3 className={"text-center "+styles.heading}>Join our list to get updates on latest releases.</h3>
                <p className={styles.data+" text-center"}>Recieve special perks and rewards, and be the first to know when we come to Android!</p>
                <div className="text-center">
                    <input className={styles.input} type='text' placeholder="EMAIL" />
                    <button className={styles.button} />
                </div>
            </div>
        </div>
        
    )
}

export default Contact
