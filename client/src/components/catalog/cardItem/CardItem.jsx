import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import { pathToUrl } from '../../../utils/pathToUrl';
import Path from '../../../path';

export default function CartItem({
    _id,
    imageUrl,
    name, 
    description
}) {
    return(
        <Card style={{ width: '20rem', height: '22rem' }}>
            <Card.Img variant="top" style={{width: '20rem', height: '12rem'}} src={imageUrl} />
            <Card.Body style={{ alignItems: 'center' }}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={pathToUrl(Path.PostDetails, { postId: _id })}
                    style={{ background: '#ff6555', fontSize: '18px', fontWeight: '600', border: '#ff6555', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>
                    Details
                </Link>
            </Card.Body>
        </Card>
    );
};