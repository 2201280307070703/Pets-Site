import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header () {
    return(
        <header className={styles.header}>
            <h1><Link className={styles.home} to="/">Pets World</Link></h1>
            <nav>
                <Link to="/games">Catalog</Link>
                <Link to="/games/create">Add Post</Link>
                <Link to="/logout">Logout</Link>

                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}