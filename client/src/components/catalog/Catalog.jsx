import CardItem from './cardItem/CardItem';
import PaginationItem from './paginationItem/PaginationItem';
import styles from './Catalog.module.css';

export default function Catalog() {
    return(
        
        <div className={styles.container}>
            <h1 className={styles.header}>Check all cute animals in our site :)</h1>
            <div className={styles.cards}>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            </div>
            <PaginationItem />
        </div>
    );
}