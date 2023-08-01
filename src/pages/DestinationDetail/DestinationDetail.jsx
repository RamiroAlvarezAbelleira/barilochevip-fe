import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import mountainDecor from "../../assests/images/mountain-decor.png"
import mountainDecor1 from "../../assests/images/mountain-decor-1.png"

const DestinationDetail = () => {
    const location = useLocation()
    const [destination, setDestination] = useState({})

    useEffect(() => {
        if (location.state) {
            setDestination(location.state)
        }
    }, [location])
    
  return (
    <div className="contact-background background-fixed">
        <Container className="about-container">
            <Row className="pt-5 top-bottom-row">
                <Col>
                    <img src={mountainDecor1} alt="decor" className="w-100 pt-4"/>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="about-title anton-font m-0 p-0">{destination.title}</h1>
                </Col>
                <Col>
                    <img src={mountainDecor} alt="decor" className="w-100 pt-4"/>
                </Col>
            </Row>
            <Row><h3 className="about-title py-5 px-2 text-center m-auto">{destination.subtitle}</h3></Row>
            <Row className="about-content py-5">
                <p>{destination.info}</p>
            </Row>
        </Container>
    </div>
  )
}
export default DestinationDetail