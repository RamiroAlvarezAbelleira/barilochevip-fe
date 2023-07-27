import { Card } from "react-bootstrap"
import "./EquipmentCard.css"
import { Link } from "react-router-dom"

const EquipmentCard = ({item}) => {
  return (
    
      <Card style={{ width: '18rem' }} className="my-3 equipment-card">
        <Link to={`/detalle/${item.id}`} className="text-decoration-none text-dark h-100 d-flex flex-column justify-content-between">
        <Card.Img variant="top" src={item.images[0]?.image_url} />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="pb-3">Precio por dia: $ {item.price}</Card.Subtitle>
        </Card.Body>
        </Link>
      </Card>
  )
}
export default EquipmentCard