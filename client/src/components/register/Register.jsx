import styles from './Register.module.css';

import { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

import AlertItem from '../alerts/AlertItem';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword'
};

export default function Register({
    showRegisterError
}) {

    const {registerSubmitHandler} = useContext(AuthContext);

    const {formValues, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: ''
    })

    return(
        <section className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formContainer}>
            {showRegisterError && <AlertItem type={'danger'} text={`${showRegisterError}`}/>}
                <h1 className={styles.header}>Register</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name={RegisterFormKeys.Email}
                    onChange={onChange}
                    value={formValues[RegisterFormKeys.Email]}
                />
                 <br />   

                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    name={RegisterFormKeys.Password}
                    onChange={onChange}
                    value={formValues[RegisterFormKeys.Password]}
                />
                <br />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input
                    type="password"
                    name={RegisterFormKeys.ConfirmPassword}
                    onChange={onChange}
                    value={formValues[RegisterFormKeys.ConfirmPassword]}
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