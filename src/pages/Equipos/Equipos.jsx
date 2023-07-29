import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { EquipmentCard } from "../../components/EquipmentCard"

const Equipos = () => {
    const location = useLocation()
    const [items, setItems] = useState([])

    useEffect(() => {
      if (location.state) {
        setItems(location.state)
      }
    }, [location])
    
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