import { Col, Container, Row } from "react-bootstrap"
import instagramLogo from "../../assests/images/instagram-logo.png"
import whatsappLogo from "../../assests/images/whatsapp-logo.png"
import { Link } from "react-router-dom"
import "./Contacto.css"

const Contacto = () => {
  return (
    <div className="contact-background">
        <h1 className="contact-title">Contactenos para realizar su consulta o reserva!</h1>
        <Container className="contact-page-container">
            <Row className="row-container">
                <Col className="contact-banner">
                </Col>
                <Col className="contact-container">
                    <Row>
                        <h3 className="fs-2 pb-3">Nuestras redes</h3>
                        <p className="fs-4 pb-5">En la brevedad estaremos respondiendo su consulta</p>
                    </Row>
                    <Row>
                        <ul className="contact-list-items">
                            <li>
                                <img src={whatsappLogo} className="whatsapp-logo" alt="whatsapp"/> +54 9 11 5555 5555
                            </li>
                            <li>
                                <Link to='https://www.instagram.com/ignacioarresesom/' className="instagram-link contact-link">
                                    <Row className="instagram-logo-container">
                                        <Col className="instagram-logo-col"><img src={instagramLogo} className="instagram-logo-contacto" alt="instagram"/></Col> <Col className="p-0">@ignacioarresesom</Col>
                                    </Row>
                                </Link> 
                            </li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Contacto