import Carousel from 'react-bootstrap/Carousel';

import styles from './CarouselItem.module.css';

export default function CarouselItem() {
    return(
        <div className={styles.container}>
            <img className={styles.image} src="https://i.cbc.ca/1.5077459.1553886010!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/pets.jpg" alt="nz" />
            <Carousel.Caption>
                <h3 className={styles.header}>First slide label</h3>
                <p className={styles.description}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
    );
};