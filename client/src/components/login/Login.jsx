import styles from './Login.module.css';

import useForm from '../../hooks/useForm';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export default function Login({
    loginSubmitHandler
}) {
    const {formValues, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    });

    return(
        <section className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
    
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name={LoginFormKeys.Email}
                    onChange={onChange}
                    value={formValues[LoginFormKeys.Email]}
                />
                <br/>
    
                <label htmlFor="login-pass">Password:</label>
                <input
                    type="password"
                    name={LoginFormKeys.Password}
                    onChange={onChange}
                    value={formValues[LoginFormKeys.Password]}
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