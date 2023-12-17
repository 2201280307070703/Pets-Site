import styles from './Catalog.module.css';

import CardItem from './cardItem/CardItem';
import PaginationItem from './paginationItem/PaginationItem';

import * as postsService from '../../services/postService';
import { useEffect, useState } from 'react';

export default function Catalog() {
    const [posts, setPosts] = useState([]);

    const cardsItems = posts.map(post => <CardItem key={post._id} {...post}/>);

    const [currentPage, setCurrentPage] = useState(1);
    
    const itemsPerPage = 3;

    const data = cardsItems;

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    useEffect(() => {
        postsService.getAll()
        .then((posts) => setPosts(posts));
    }, []);

    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Check all cute animals in our site :)</h1>
            <PaginationItem className={styles.cards} data={data} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
        </div>
    );
}