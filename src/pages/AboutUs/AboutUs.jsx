import { Col, Container, Row } from "react-bootstrap"
import "./AboutUs.css"
import imagenEquipo from "../../assests/images/imagen-contacto.jpg"
import img7 from "../../assests/images/img-7.jpg"
import img3 from "../../assests/images/img-3.jpg"
import img9 from "../../assests/images/img-9.jpg"
import img8 from "../../assests/images/img-8.jpg"
import mountainDecor from "../../assests/images/mountain-decor.png"
import mountainDecor1 from "../../assests/images/mountain-decor-1.png"
const AboutUs = () => {
  return (
    <div className="contact-background background-fixed">
        <Container className="about-container">
            <Row className="pt-5">
                <Col>
                    <img src={mountainDecor1} alt="decor" className="w-100 pt-4"/>
                </Col>
                <Col>
                    <h1 className="about-title">Bariloche Vip</h1>
                </Col>
                <Col>
                    <img src={mountainDecor} alt="decor" className="w-100 pt-4"/>
                </Col>
            </Row>
            <Row><h3 className="about-subtitle">Sobre Nosotros</h3></Row>
            <Row className="about-content">
                <Row className="py-5">
                    <Col className="flex-center-col">
                        <p className="border-right">
                            Bienvenidos a Bariloche VIP, tu destino de confianza para rentar equipo de montaña en la hermosa ciudad de Bariloche. 
                            En nuestra página, encontrarás todo lo que necesitas para vivir aventuras épicas en la naturaleza salvaje de esta región.
                        </p>
                        <p className="border-right">
                            En Bariloche VIP, somos un emprendimiento creciente y apasionado por la montaña. 
                            Nuestro equipo está formado por entusiastas de la naturaleza y expertos conocedores de la zona, 
                            lo que nos permite brindar un servicio de alta calidad y ofrecer el equipo adecuado para satisfacer 
                            tus necesidades específicas.
                        </p>
                    </Col>
                    <Col className="flex-center-col">
                        <img src={img7} alt="equipo de bariloche vip" className="w-75 img-right"/>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col className="flex-center-col">
                        <img src={img9} alt="equipo de bariloche vip" className="w-75 img-left"/>
                    </Col>
                    <Col className="flex-center-col">
                        <p className="border-left">
                            Nuestro principal objetivo es asegurarnos de que disfrutes al máximo tu experiencia en las montañas de Bariloche. 
                            Sabemos que cada aventura es única y especial, por lo que nos esforzamos en proporcionarte 
                            el equipo adecuado para cada ocasión. Ya sea que estés planeando una excursión tranquila o un desafío más extremo, 
                            contamos con una amplia variedad de equipos de montaña de primera calidad para alquilar.
                        </p>
                        <p className="border-left">
                            En Bariloche VIP, nos enorgullece mantener nuestros equipos en excelente estado y completamente actualizados. 
                            Realizamos un riguroso proceso de mantenimiento y renovación para garantizar que nuestro equipo cumpla con los más altos 
                            estándares de calidad y seguridad. Además, nuestro equipo está siempre dispuesto a brindarte asesoramiento experto sobre 
                            los productos que ofrecemos, así como sobre las rutas y destinos más recomendados en la zona.
                        </p>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col className="flex-center-col">
                        <p className="border-right">
                            Entendemos que planificar una aventura en la montaña puede ser desafiante, 
                            especialmente si no estás familiarizado con la zona. 
                            Por eso, en Bariloche VIP no solo te proporcionamos el equipo necesario, 
                            sino que también te ofrecemos información y recomendaciones útiles. 
                            Estamos comprometidos en ayudarte a organizar tu viaje de manera eficiente y segura, 
                            para que puedas disfrutar al máximo de las maravillas naturales que Bariloche tiene para ofrecer.
                        </p>
                    </Col>
                    <Col className="flex-center-col">
                        <img src={imagenEquipo} alt="equipo de bariloche vip" className="w-75 img-right"/>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col className="flex-center-col">
                        <img src={img3} alt="equipo de bariloche vip" className="w-75 img-left"/>
                    </Col>
                    <Col className="flex-center-col">
                        <p className="border-left">
                            Además, en Bariloche VIP nos preocupamos por el medio ambiente y estamos comprometidos con su preservación. 
                            Promovemos prácticas sostenibles en nuestras operaciones y animamos a nuestros clientes a hacer lo mismo. 
                            Creemos firmemente en la importancia de mantener la belleza natural de Bariloche para las generaciones futuras, 
                            y nos esforzamos por ser un ejemplo de responsabilidad ambiental en la industria del turismo de montaña.
                        </p>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col className="flex-center-col">
                        <p className="border-right">
                            En resumen, en Bariloche VIP somos un emprendimiento en crecimiento, apasionado por la montaña 
                            y dedicado a brindarte la mejor experiencia en tu aventura en Bariloche. Con nuestro equipo de alta calidad, 
                            asesoramiento experto y compromiso con la sostenibilidad, estamos listos para ayudarte a hacer realidad tus 
                            sueños en las montañas. ¡No dudes en contactarnos y descubrir todo lo que podemos hacer por ti!
                        </p>
                    </Col>
                    <Col className="flex-center-col">
                        <img src={img8} alt="equipo de bariloche vip" className="w-75 img-right"/>
                    </Col>
                </Row>
                <Row className="pt-5 mt-5">
                    <Col>
                        <img src={mountainDecor1} alt="decor" className="w-100 pt-4"/>
                    </Col>
                    <Col>
                        <h4 className="about-title fs-3">Gracias por elegirnos!</h4>
                    </Col>
                    <Col>
                        <img src={mountainDecor} alt="decor" className="w-100 pt-4"/>
                    </Col>
                </Row>
            </Row>
        </Container>
    </div>
  )
}
export default AboutUs