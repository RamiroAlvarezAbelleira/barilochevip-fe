import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { EquipmentCard } from "../../components/EquipmentCard"
import { useSelector } from "react-redux"

const Equipos = () => {
    const location = useLocation()
    const [items, setItems] = useState([])
    const equipos = useSelector(state => state.equipment)

    useEffect(() => {
      if (location.state.length > 0) {
        setItems(location.state)
      } else {
        setItems(equipos)
      }
    }, [location, equipos])
    
  return (
    <div className="page-container">
      <Container className='p-0 container-custom-style'>
        <Row className='custom-row'><h1 className='text-start m-5 pb-5 w-100 home-title'>Resultados de la busqueda.</h1></Row>
        <Row className="justify-content-around py-4 px-5 custom-row">
          { 
            items.map((item, i) => {
              return <EquipmentCard key={i} item={item}/>
            })
          }
        </Row>
      </Container>
    </div>
  )
}
export default Equipos