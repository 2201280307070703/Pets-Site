import styles from './PostDetails.module.css';

import { useParams, Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import * as postsService from '../../services/postService';
import Path from '../../path';
import { pathToUrl } from '../../utils/pathToUrl';
import AuthContext from '../../contexts/authContext';

import { useContext, useEffect, useState } from 'react';

export default function PostDetails() {
    const { postId }  = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        postsService.getOne(postId)
        .then((post) => setPost(post));
    }, [postId]);

    const { _id } = useContext(AuthContext);

    return (
        <div className={styles.container}>
        <Card style={{ width: '26rem', background: 'lightcoral' }}>
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Body>
                <Card.Title className={styles.name}>{post.name}</Card.Title>
                <Card.Text className={styles.breed}>
                    {post.breed}
                </Card.Text>
                <Card.Text>
                    Age: {post.age}
                </Card.Text>
                <Card.Text className={styles.description}>
                    {post.description}
                </Card.Text>
                {_id === post._ownerId && (
                    <>
                <Link to={pathToUrl(Path.PostDelete, {postId: post._id})} className={styles.deleteBtn}>Delete</Link>
                <Link to={pathToUrl(Path.PostEdit, {postId: post._id})} className={styles.editBtn}>Edit</Link>
                    </>
                )}
            </Card.Body>
        </Card>
        </div>
    );
}