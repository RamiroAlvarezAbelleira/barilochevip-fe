import {Carousel} from 'react-bootstrap';
import slider1 from '../../assests/images/slider-1.2.jpg'
import slider3 from '../../assests/images/slider-3.2.jpg'
import './HomeCarousel.css'

function HomeCarousel() {
  return (
    <Carousel className='home-carousel'>
      <Carousel.Item className='home-carousel-item carousel-img-1'>
        <Carousel.Caption className='caption-1'>
          <h3>¡Explora la majestuosidad de Bariloche!</h3>
          <h5 className='text-center'>Con equipos de montaña de primera clase</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='home-carousel-item carousel-img-2'>
        <Carousel.Caption className='caption-2'>
          <h3>¡Prepárate para la aventura!</h3>
          <h5 className='text-center'>Descubre paisajes increíbles con nuestros equipos de montaña</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;