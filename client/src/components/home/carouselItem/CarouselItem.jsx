import styles from './CarouselItem.module.css';

import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import Path from '../../../path';
import { pathToUrl } from "../../../utils/pathToUrl";

export default function CarouselItem({
    _id,
    imageUrl,
    name,
    description
}) {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={imageUrl} alt="pet image" />
            <Carousel.Caption>
                <Link to={pathToUrl(Path.PostDetails, {postId: _id})} className={styles.detailsBtn}>Details</Link>
                <h3 className={styles.header}>{name}</h3>
                <p className={styles.description}>{description}</p>
            </Carousel.Caption>
        </div>
    );
};