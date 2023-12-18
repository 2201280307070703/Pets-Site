import styles from './PostDelete.module.css';

import Card from 'react-bootstrap/Card';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as postsService from '../../services/postService';
import Path from '../../path';
import { pathToUrl } from '../../utils/pathToUrl'

import AlertItem from '../alerts/AlertItem';

export default function PostDelete() {
    const { postId } = useParams();

    const [post, setPost] = useState({});

    const [showError, setShowError] = useState(false);


    useEffect(() => {postsService.getOne(postId)
    .then(post => setPost(post))
    }, [postId]);

    const navigate = useNavigate();

    const deleteOnSubmitHandler = async (e) => {
        e.preventDefault();
        try{
            await postsService.remove(postId);
            
            navigate(Path.Catalog);
        }catch(error){
            setShowError(true);
        }
    }
    return(
        <Card className={styles.container}>
            <Card.Body className={styles.card}>
                <Card.Title className={styles.title}>Are you sure you want to delete {post.name}'s post?</Card.Title>
                <img className={styles.image} src={post.imageUrl} />
                <div className={styles.buttons}>
                    <button onClick={deleteOnSubmitHandler} className={styles.deletelBtn}>Delete</button>
                    <Link to={pathToUrl(Path.PostDetails, { postId: postId })} className={styles.cancelBtn}>Cancel</Link>
                </div>
            </Card.Body>
            {showError && <AlertItem type={'danger'} text={'Something went wrong! Please try again.'}/>}
        </Card>
    );
};