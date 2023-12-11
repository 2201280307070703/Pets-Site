import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <h1><Link className={styles.home} to="/">Pets World</Link></h1>
            <nav className={styles.nav}>
                <Link to="/catalog" className={styles.link} >Catalog</Link>
                <Link to="/games/create" className={styles.link} >Add Post</Link>
                <Link to="/logout" className={styles.link} >Logout</Link>

                <Link to="/login" className={styles.link} >Login</Link>
                <Link to="/register" className={styles.link} >Register</Link>
            </nav>
        </header>
    );
};