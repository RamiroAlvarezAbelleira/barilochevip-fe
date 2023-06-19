import { useParams } from "react-router-dom"
import "./Detail.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row } from "react-bootstrap"
import { getEquipmentById } from "../../redux/states/equipmentDetail"

const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const equipment = useSelector(state => state.equipmentDetail)
    useEffect(() => {
        dispatch(getEquipmentById(id))
    },[id])
  return (equipment && 
    <div className="page-container">
        <Container>
            <Row>
                <p>{equipment?.name}</p>
            </Row>
        </Container>
    </div>
  )
}
export default Detail