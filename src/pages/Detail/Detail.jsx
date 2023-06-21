import { useParams } from "react-router-dom"
import "./Detail.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Container, Row } from "react-bootstrap"
import { getEquipmentById } from "../../redux/states/equipmentDetail"

const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const equipment = useSelector(state => state.equipmentDetail)

    useEffect(() => {
        dispatch(getEquipmentById(id))
    },[id, dispatch])

  return (equipment && 
    <div className="page-container py-5">
        <Container className="container-custom-style custom-border-radius">
            <Row>
                <Col>
                    <Row>
                        <img src={equipment.image} alt={equipment.name}/>
                    </Row>
                    <Row>
                        aca iria el calendario
                    </Row>
                </Col>
                <Col sm={3} className="border-left custom-border-radius">
                    <p>{equipment?.name}</p>
                    <p>precio</p>
                    <p>contacto</p>
                    <p>stock total</p>
                    <p>descripcion</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Detail