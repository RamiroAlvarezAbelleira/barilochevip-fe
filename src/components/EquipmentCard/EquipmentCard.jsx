import { Card } from "react-bootstrap"
import "./EquipmentCard.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import arrangeEquipmentImages from "../../helpers/arrangeEquipmentImages";

const EquipmentCard = ({item}) => {
  const [show, setShow] = useState(false);
  const [equipment, setEquipment] = useState()
  useEffect(() => {
    setEquipment(arrangeEquipmentImages(item))
  }, [item])
  
  return (equipment &&
      <Card style={{ width: '18rem' }} className={`my-3 mx-2 equipment-card ${show ? "show" : ""}`}>
        <Link to={`/detalle/${equipment.id}`} onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}} className="text-decoration-none text-dark h-100 d-flex flex-column justify-content-between">
        <div className="equipment-img" style={{backgroundImage: `url(${equipment.images[0]?.image_url})`, height: "150px"}}></div>
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Subtitle className={ show ? "pb-3 appear-on-hover show" : "pb-3 appear-on-hover"}>Precio por dia: <span className="text-success">$ {equipment.price}</span></Card.Subtitle>
          <Card.Title>{equipment.name}</Card.Title>
          <Card.Subtitle className={ show ? "py-3 appear-on-hover show" : "py-3 appear-on-hover"}>Ver disponibilidad</Card.Subtitle>
        </Card.Body>
        </Link>
      </Card>
  )
}
export default EquipmentCard