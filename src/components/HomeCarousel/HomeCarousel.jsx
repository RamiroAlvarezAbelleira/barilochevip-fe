import {Carousel} from 'react-bootstrap';
import slider1 from '../../assests/images/slider-1.jpg'
import slider3 from '../../assests/images/slider-3.jpg'
import './HomeCarousel.css'

function HomeCarousel() {
  return (
    <Carousel variant="dark" className='home-carousel'>
      <Carousel.Item className='home-carousel-item'>
        <img
          className="d-block carousel-img m-auto"
          src={slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='home-carousel-item'>
        <img
          className="d- carousel-img m-auto"
          src={slider3}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;