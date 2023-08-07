import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"
import instagramLogo from "../../assests/images/instagram-logo.png"
import whatsappLogo from "../../assests/images/whatsapp-logo.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="sticky-footer bg-black footer-container">
        <Container className="text-white footer-container">
          <h3 className="text-center pt-3 mb-0">Redes sociales</h3>
          <Row className="instagram-container justify-content-center">
            <Link to='https://www.instagram.com/ignacioarresesom/' className="instagram-link">
              <img src={instagramLogo} className="instagram-logo" alt="instagram"/>
            </Link>
            <Link to='https://wa.link/v9yf7c' className="instagram-link">
              <img src={whatsappLogo} className="wapp-social-networks" alt="whatsapp"/>
            </Link>
          </Row>
          <Row className="instagram-container">
            <Col span={6} className="mobile-version-col">
              <h4 className="list-titles">Contacto</h4>
              <ul className="list-items">
                <Link to='https://wa.link/v9yf7c' className="text-decoration-none">
                  <li className="phonenumber">
                    <img src={whatsappLogo} className="whatsapp-logo" alt="whatsapp"/> +54 9 11 6902 7644
                  </li>
                </Link>
                <Link to='https://www.instagram.com/ignacioarresesom/' className="text-decoration-none text-center">
                  <li className="phonenumber">
                    <img src={instagramLogo} className="instagram-logo-contacto" alt="instagram"/> @ignacioarresesom
                  </li>
                </Link>
              </ul>
            </Col>
            <Col span={6} className="divider mobile-version-col">
            <h4 className="list-titles">Links</h4>
            <ul className="list-items">
                <li>
                  <Link to='/contacto' className="link">Contacto</Link>
                </li>
                <li>
                  <Link to='/' className="link">Equipos</Link>
                </li>
                <li>
                  <Link to='/nosotros' className="link">Sobre nosotros</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="copyright text-center my-auto">
            <span >Copyright &copy; Bariloche vip Creado por Ignacio Arreses y desarrollado por hermanos Alvarez 2023</span>
          </div>
        </Container>
    </footer>
  )
}
export default Footer