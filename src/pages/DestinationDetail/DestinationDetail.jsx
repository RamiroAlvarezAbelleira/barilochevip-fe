import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import mountainDecor from "../../assests/images/mountain-decor.png"
import mountainDecor1 from "../../assests/images/mountain-decor-1.png"
import {IoChevronBack} from "react-icons/io5"
import "./DestinationDetail.css"

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
            <Row className="pb-0 pt-5 mobile-go-back-row d-flex justify-content-start align-items-center">
                <Link to={'/'} className="back-arrow"><IoChevronBack /></Link>
            </Row>
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
                <Col className="flex-center-col">
                    <p className="border-right">{destination.info}</p>
                </Col>
                <Col className="flex-center-col">
                    <div className={`destination-detail-img-container ${destination.img}`}></div>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}
export default DestinationDetail