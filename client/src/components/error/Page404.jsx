import styles from './Page404.module.css';

import { Link } from 'react-router-dom';

import Path from '../../path';

export default function Page404() {
    return(
        <div className={styles.container}>
            <img src="https://i.insider.com/54aeec896da8110d36e2093d?width=750&format=jpeg&auto=webp" alt="404page"/>
            <Link to={Path.Home} className={styles.homeBtn}>Home</Link>
        </div>
    );
};