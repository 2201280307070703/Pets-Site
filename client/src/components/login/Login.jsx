import styles from './Login.module.css';

export default function Login() {
    return(
        <section className={styles.container}>
        <form className={styles.form}>
    
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Sokka@gmail.com"
                />
                <br/>
    
                <label htmlFor="login-pass">Password:</label>
                <input
                    type="password"
                    id="login-password"
                    name="password"
                />
                <br/>
                <input type="submit" className={styles.submitBtn} value="Login" />
                <p className={styles.link}>
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
};