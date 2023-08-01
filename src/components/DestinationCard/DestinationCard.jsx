import { useState } from "react"
import "./DestinationCard.css"
import { Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const DestinationCard = ({destination}) => {
    const [show, setShow] = useState()
    const navigate = useNavigate()
    const handleRedirection = (e) => {
        e.preventDefault()
        navigate(`/destinations/${destination.id}`, {state: destination})
    }
  return (
    <Card style={{ width: '18rem' }} className="m-3 p-0 destination-card">
        <Link onClick={handleRedirection} 
            onMouseEnter={() => {setShow(true)}} 
            onMouseLeave={() => {setShow(false)}} 
            className="text-decoration-none text-dark h-100 d-flex flex-column justify-content-between">
        <Card.Body className="d-flex flex-column justify-content-end p-0">
            <Card.Text className={`img-height ${destination.img}`}></Card.Text>
            <Card.Title className="anton-font">{destination.title}</Card.Title>
            <Card.Subtitle className="px-2">{destination.subtitle}</Card.Subtitle>
            <Card.Text className={ show ? "py-3 anton-font appear-on-hover show" : "py-3 anton-font appear-on-hover"}>Ver mas.</Card.Text>
        </Card.Body>
        </Link>
      </Card>
  )
}
export default DestinationCard