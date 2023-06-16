import { Col, Container, Row } from "react-bootstrap"
import instagramLogo from "../../assests/images/instagram-logo.png"
import whatsappLogo from "../../assests/images/whatsapp-logo.png"
import { Link } from "react-router-dom"
import "./Contacto.css"

const Contacto = () => {
  return (
    <div className="contact-background">
        <h1 className="contact-title">Contactanos para realizar tu consulta o reserva!</h1>
        <Container className="contact-page-container">
            <Row className="row-container">
                <Col className="contact-banner">
                </Col>
                <Col className="contact-container">
                    <Row>
                        <h3>Nuestras redes</h3>
                        <p>En la brevedad estaremos respondiendo tu consulta</p>
                    </Row>
                    <Row>
                        <ul className="list-items">
                            <li>
                                <img src={whatsappLogo} className="whatsapp-logo" alt="whatsapp"/> +54 9 11 5555 5555
                            </li>
                            <li>
                                <Link to='https://www.instagram.com/ignacioarresesom/' className="instagram-link contact-link">
                                    <Row className="instagram-logo-container">
                                        <Col className="instagram-logo-col"><img src={instagramLogo} className="instagram-logo-contacto" alt="instagram"/></Col> <Col>@ignacioarresesom</Col>
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