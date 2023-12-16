import styles from './Catalog.module.css';

import CardItem from './cardItem/CardItem';
import PaginationItem from './paginationItem/PaginationItem';

import * as postsService from '../../services/postService';
import { useEffect, useState } from 'react';

export default function Catalog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll()
        .then((posts) => setPosts(posts));
    }, []);

    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Check all cute animals in our site :)</h1>
            <div className={styles.cards}>
                {posts.map(post => <CardItem key={post._id} {...post}/>)}
            </div>
            <PaginationItem />
        </div>
    );
}