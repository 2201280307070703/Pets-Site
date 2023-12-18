import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import Path from '../../path';

export default function Header() {
    const {isAuthenticated} = useContext(AuthContext);

    return(
        <header className={styles.header}>
            <h1><Link className={styles.home} to={Path.Home}>Pets World</Link></h1>
            <nav className={styles.nav}>
                {isAuthenticated && (
                    <>
                        <Link to={Path.PostCreate} className={styles.link} >Add Post</Link>
                        <Link to={Path.Logout} className={styles.link} >Logout</Link>
                    </>
                )}
                <Link to={Path.Catalog} className={styles.link} >Catalog</Link>

                {!isAuthenticated && (
                    <>
                        <Link to={Path.Login} className={styles.link} >Login</Link>
                        <Link to={Path.Register} className={styles.link} >Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};