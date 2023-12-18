import * as postsService from '../../services/postService';

import Carousel from 'react-bootstrap/Carousel';

import CarouselItem from './carouselItem/CarouselItem';
import { useEffect, useState } from 'react';

export default function Home() {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        postsService.getLastThreePosts()
        .then(result => setLatestPosts(result));
    }, []);

    return(
        <>
            <Carousel>
                {latestPosts.map(post => <Carousel.Item key={post._id}>< CarouselItem {...post} /></Carousel.Item>)}
            </Carousel>
            <div style={{ height: '83vh', background: 'lightseagreen', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '64px', fontWeight: '800', color: '#ff6555' }}>
                    No posts yet!
                </h1>
            </div>
        </>
    );
};