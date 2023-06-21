import { Link, useParams } from "react-router-dom"
import "./Detail.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"
import { getEquipmentById } from "../../redux/states/equipmentDetail"
import MyCalendar from "../../components/MyCalendar/MyCalendar"
import instagramLogo from "../../assests/images/instagram-logo.png"
import whatsappLogo from "../../assests/images/whatsapp-logo.png"

const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const equipment = useSelector(state => state.equipmentDetail)

    useEffect(() => {
        dispatch(getEquipmentById(id))
    },[id, dispatch])

  return (equipment && 
    <div className="page-container py-5">
        <Container className="container-custom-style custom-border-radius p-5">
            <Row>
                <Col>
                    <Row>
                        <h4 className="pb-3">{equipment?.name}</h4>
                        <img src={equipment.image} alt={equipment.name}/>
                    </Row>
                    <Row><h3>Disponibilidad</h3></Row>
                    <Row className="py-5 my-5">
                        <MyCalendar />
                    </Row>
                </Col>
                <Col lg={4} xxl={3} className="py-5 equipment-details custom-border-radius">
                    <h4>Detalles</h4>
                    <p className="text-start">$ {equipment.priceXday} el dia</p>
                    <p className="text-start">10 en stock</p>
                    <h5 className="pt-4">Contactenos para reservar</h5>
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
export default Detail