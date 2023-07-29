import { Link, useParams } from "react-router-dom"
import "./Detail.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"
import { getEquipmentById } from "../../redux/states/equipmentDetail"
import MyCalendar from "../../components/MyCalendar/MyCalendar"
import instagramLogo from "../../assests/images/instagram-logo.png"
import whatsappLogo from "../../assests/images/whatsapp-logo.png"
import axios from "../../api/axios"

const Detail = () => {
    const {id} = useParams()
    const [done, setDone] = useState(false)
    const dispatch = useDispatch()
    const equipment = useSelector(state => state.equipmentDetail)

    useEffect(() => {
        const getEquipment = async () => {
            const response = await axios.get(`equipos/${id}`)
            if (response.status === 200) {
                setDone(true)
                dispatch(getEquipmentById(response.data))
            }
        }
        getEquipment()
    },[id, dispatch])

  return (done && 
    <div className="detail-page-container">
        <Container className="container-custom-style custom-border-radius p-5">
            <Row className="detail-main-row">
                <Col className="image-calendar-col">
                    <Row className="image-container">
                        <h4 className="pb-3 fs-1 text-start">{equipment?.name}</h4>
                        <img src={equipment.images[0]?.image_url} alt={equipment.name} className="h-75 w-auto"/>
                    </Row>
                    <Row className="d-flex justify-content-center calendar-row">
                        <h3 className="text-start w-75 mt-5 pt-5 border-top">Disponibilidad</h3>
                    </Row>
                    <Row className="py-5 mb-5 calendar-row">
                        <MyCalendar bookings={equipment.bookings} stock_total={equipment.stock_total}/>
                    </Row>
                </Col>
                <Col lg={4} xxl={3} className="py-5 equipment-details">
                    <h4>Detalles</h4>
                    <p className="text-start">$ {equipment.price} el dia</p>
                    <p className="text-start">{equipment.stock_total} en stock</p>
                    <p className="text-start">Descripcion: {equipment.description}</p>
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