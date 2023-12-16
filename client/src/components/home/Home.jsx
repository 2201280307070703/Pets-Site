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

    console.log(latestPosts);
    return(
        <Carousel>
            {latestPosts.map(post => <Carousel.Item key = {post._id}>< CarouselItem {...post}/></Carousel.Item>)}
        </Carousel>
    );
}