import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CartItem() {
    return(
        <Card style={{ width: '20rem', height: '25rem' }}>
            <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/ZRlvJWfILYtXnuk9hDljqYcnIyA=/0x0:3504x2336/1200x800/filters:focal(1236x1025:1796x1585)/cdn.vox-cdn.com/uploads/chorus_image/image/65816344/pig_GettyImages_131967915.0.jpg" />
            <Card.Body style={{alignItems: 'center'}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button style={{background: '#ff6555', fontSize:'18px', fontWeight: '600', border: '#ff6555'}}>Details</Button>
            </Card.Body>
        </Card>
    );
};