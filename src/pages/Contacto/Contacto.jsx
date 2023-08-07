import { Col, Container, Row } from "react-bootstrap"
import instagramLogo from "../../assests/images/instagram-logo.png"
import whatsappLogo from "../../assests/images/whatsapp-logo.png"
import { Link } from "react-router-dom"
import {IoChevronBack} from "react-icons/io5"
import "./Contacto.css"

const Contacto = () => {
  return (
    <div className="contact-background">
        <h1 className="contact-title">Contactenos para realizar su consulta o reserva!</h1>
        <Container className="small-contact-page-container">
            <Row className="small-row-container">
                <Row className="px-0 mobile-go-back-row d-flex justify-content-start align-items-center">
                    <Link to={'/'} className="back-arrow"><IoChevronBack /></Link>
                </Row>
                <Row className="align-items-center">
                    <h1 className="small-contact-title">Contactenos para realizar su consulta o reserva!</h1>
                </Row>
                <Row>
                    <h3 className="fs-2 pb-3 pt-5 custom-font">Nuestras redes</h3>
                    <p className="fs-4 p-0">En la brevedad estaremos respondiendo su consulta</p>
                </Row>
                <Row className="instagram-container justify-content-center border-0">
                    <Link to='https://www.instagram.com/ignacioarresesom/' className="instagram-link">
                    <img src={instagramLogo} className="instagram-logo" alt="instagram"/>
                    </Link>
                    <Link to='https://wa.link/v9yf7c' className="instagram-link">
                    <img src={whatsappLogo} className="wapp-social-networks" alt="whatsapp"/>
                    </Link>
                </Row>
            </Row>
        </Container>
        <Container className="contact-page-container">
            <Row className="row-container">
                <Col className="contact-banner">
                </Col>
                <Col className="contact-container">
                    <Row>
                        <h3 className="fs-2 pb-3 custom-font">Nuestras redes</h3>
                        <p className="fs-4 pb-5">En la brevedad estaremos respondiendo su consulta</p>
                    </Row>
                    <Row>
                        <ul className="contact-list-items">
                            <li>
                                <Link to='https://wa.link/v9yf7c' className="instagram-link contact-link m-auto">
                                    <img src={whatsappLogo} className="whatsapp-logo" alt="whatsapp"/> +54 9 11 6902 7644
                                </Link>
                            </li>
                            <li>
                                <Link to='https://www.instagram.com/ignacioarresesom/' className="instagram-link contact-link m-auto">
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