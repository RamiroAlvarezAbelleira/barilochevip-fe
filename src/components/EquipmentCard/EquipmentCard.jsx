import { Button, Card } from "react-bootstrap"
import "./EquipmentCard.css"
import { Link } from "react-router-dom"

const EquipmentCard = ({item}) => {
  return (
    <Card style={{ width: '18rem' }} className="my-3">
      <Card.Img variant="top" src={item.image} />
      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="pb-3">Precio x dia: $ {item.priceXday}</Card.Subtitle>
        <Link to={`/detalle/${item.id}`}><Button variant="dark">Ver disponibilidad</Button></Link>
      </Card.Body>
    </Card>
  )
}
export default EquipmentCard