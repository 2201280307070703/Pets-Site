import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './carouselItem/CarouselItem';

export default function Home () {
    return(
        <Carousel>
            <Carousel.Item>
                < CarouselItem />
            </Carousel.Item>
            <Carousel.Item>
                < CarouselItem />
            </Carousel.Item>
            <Carousel.Item>
                < CarouselItem />
            </Carousel.Item>
        </Carousel>
    );
}