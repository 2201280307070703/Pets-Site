import styles from './Login.module.css';

import useForm from '../../hooks/useForm';

export default function Login() {
    const {formValues, onChange, onSubmit} = useForm({
        email: '',
        password: ''
    });

    return(
        <section className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
    
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={onchange}
                    value={formValues.email}
                />
                <br/>
    
                <label htmlFor="login-pass">Password:</label>
                <input
                    type="password"
                    id="login-password"
                    name="password"
                    onChange={onchange}
                    value={formValues.password}
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