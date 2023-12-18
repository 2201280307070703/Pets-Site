import styles from './PostEdit.module.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as postService from '../../services/postService';
import Path from '../../path';

import AlertItem from '../alerts/AlertItem';

export default function PostEdit() {
    const navigate = useNavigate();

    const { postId } = useParams();

    const [post, setPost] = useState({
        name: '',
        breed: '',
        age: '',
        imageUrl: '',
        description: ''
    });

    const [showError, setShowError] = useState('');

    useEffect(() => {
        postService.getOne(postId)
        .then(post => setPost(post))
    }, [postId]);

    const editSubmitHandler = async (e) => {
        e.preventDefault();

        try{
            if(post.name === '' || post.breed === ''  || post.age === ''  || post.imageUrl === ''  || post.description === '' ){
                throw Error('Fill all inputs!');
               }
            await postService.edit(postId, post);

            navigate(Path.Catalog);
        }catch(error){
            if(error.message){
                setShowError(error.message);
            }else{
                setShowError('Something went wrong! Please try again.');
            }
        }
    };

    const onChange = (e) => {
        setPost(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return(
        <div className={styles.container}>
        <section className={styles.createPage}>
        <form id="create" onSubmit={editSubmitHandler}>
            <div className="container">
                <h1 className={styles.header}>Edit Your Post</h1>
                <input type="text" 
                 name="name" 
                 value={post.name}
                 onChange={onChange}
                 />
                <br/>

                <input type="text"  
                name="breed" 
                value={post.breed}
                onChange={onChange}
                />
                <br/>

                <input type="text"  
                name="age" 
                value={post.age}
                onChange={onChange}
                />
                <br/>

                <input type="text"  
                name="imageUrl" 
                value={post.imageUrl}
                onChange={onChange}
                />
                <br/>

                <textarea 
                name="description"
                value={post.description}
                onChange={onChange}
                ></textarea>
                <input className={styles.submitBtn} type="submit" value="Edit" />
            </div>
        </form>
    </section>
    {showError && <AlertItem type={'danger'} text={`${showError}`}/>}
    </div>
    );
};