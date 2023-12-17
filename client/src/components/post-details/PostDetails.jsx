import styles from './PostDetails.module.css';

import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as postsService from '../../services/postService';
import * as commentService from '../../services/commentService';
import Path from '../../path';
import { pathToUrl } from '../../utils/pathToUrl';
import AuthContext from '../../contexts/authContext';

import Card from 'react-bootstrap/Card';
import CommentsItem from './commentsItem/CommentsItem';
import useForm from '../../hooks/useForm';

export default function PostDetails() {
    const { postId }  = useParams();

    const [post, setPost] = useState({});

    const [comments, setComments] = useState([]);

    const { _id, isAuthenticated, email } = useContext(AuthContext);

    useEffect(() => {
        postsService.getOne(postId)
        .then((post) => setPost(post));

        commentService.getAll(postId)
        .then((comments) => setComments(comments));
    }, [postId]);

    const commentSubmitHandler = async () => {
        const newComment = await commentService.create(postId, formValues, email);


        setComments(state => ([
            ...state,
            newComment,
        ]));

        formValues.message = '';

    };

    const {formValues, onChange, onSubmit} = useForm(commentSubmitHandler, {
        message: ''
    });

    return (
        <div className={styles.container}>
        <Card style={{ width: '26rem', background: 'lightcoral'}}>
            <Card.Img variant="top" style={{ height: '200px'}} src={post.imageUrl} />
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
                {comments.map(comment => (<CommentsItem key={comment._id} owner={comment.owner} comment={comment.comment.message} />))}

                {isAuthenticated && (
                    <div className={styles.addComment}>
                        <form onSubmit={onSubmit}>
                            <textarea name="message" cols="40" rows="2"
                                placeholder="Add comment..."
                                value={formValues.message}
                                onChange={onChange}
                            ></textarea>
                            <button type="submit" className={styles.postBtn}>Post</button>
                        </form>
                    </div>
                )}
            </Card>
        </div>
    );
}