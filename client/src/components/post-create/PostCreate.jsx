import styles from './PostCreate.module.css';

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import useForm from '../../hooks/useForm';
import * as postService from '../../services/postService';
import Path from '../../path';

import AlertItem from '../alerts/AlertItem';

const CreateFormKeys = {
    Name: 'name',
    Breed: 'breed',
    Age: 'age',
    ImageUrl: 'imageUrl',
    Description: 'description'
};

export default function PostCreate() {
    const navigate = useNavigate();

    const [showError, setShowError] = useState(false);
    
    const createSubmitHandler = async (formValues) => {
        try{
           await postService.create(formValues);

            navigate(Path.Home);
        }catch(error){
            setShowError(true);
        }
    };

    const {formValues, onChange, onSubmit} = useForm(createSubmitHandler, {
        [CreateFormKeys.Name]: '',
        [CreateFormKeys.Breed]: '',
        [CreateFormKeys.Age]: '',
        [CreateFormKeys.ImageUrl]: '',
        [CreateFormKeys.Description]: ''
    });

    return(
        <div className={styles.container}>
        <section className={styles.createPage}>
        <form onSubmit={onSubmit}>
            <div className="container">
                <h1 className={styles.header}>Add Post</h1>
                <input
                 type="text" 
                 name="name" 
                 placeholder="Enter pet name..."
                 onChange={onChange}
                 value={formValues[CreateFormKeys.Name]}
                 />
                <br/>

                <input type="text"  
                name="breed" 
                placeholder="Enter pet breed..."
                onChange={onChange}
                value={formValues[CreateFormKeys.Breed]}
                />
                <br/>

                <input type="text"  
                name="age" 
                placeholder="Enter pet age..." 
                onChange={onChange}
                value={formValues[CreateFormKeys.Age]}
                />
                <br/>

                <input type="text"  
                name="imageUrl" 
                placeholder="Upload a photo..." 
                onChange={onChange}
                value={formValues[CreateFormKeys.ImageUrl]}
                />
                <br/>

                <textarea 
                name="description" 
                placeholder="Enter some description..."
                onChange={onChange}
                value={formValues[CreateFormKeys.Description]}
                ></textarea>

                <input className={styles.submitBtn} type="submit" value="Add Post" />
            </div>
        </form>
    </section>
    {showError && <AlertItem type={'danger'} text={'Something went wrong!'}/>}
    </div>
    );
};