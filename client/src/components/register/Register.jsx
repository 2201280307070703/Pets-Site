import styles from './Register.module.css';

export default function Register() {
    return(
        <section className={styles.container}>
        <form className={styles.form} >
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Register</h1>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                />
                 <br />   

                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="register-password"
                />
                <br />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                />
                <br />

                <input className={styles.submitBtn} type="submit" value="Register" />

                <p className={styles.link}>
                    <span>If you already have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
};