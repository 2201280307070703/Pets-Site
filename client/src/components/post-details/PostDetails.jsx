import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './PostDetails.module.css';

export default function PostDetails() {
    return (
        <div className={styles.container}>
        <Card style={{ width: '26rem', background: 'lightcoral' }}>
            <Card.Img variant="top" src="https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750" />
            <Card.Body>
                <Card.Title className={styles.name}>Card Title</Card.Title>
                <Card.Text className={styles.breed}>
                    French Buldog
                </Card.Text>
                <Card.Text>
                    Age: 2
                </Card.Text>
                <Card.Text className={styles.description}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button className={styles.deleteBtn}>Delete</Button>
                <Button className={styles.editBtn}>Edit</Button>
            </Card.Body>
        </Card>
        </div>
    );
}