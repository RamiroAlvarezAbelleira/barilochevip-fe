import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import { EquipmentCard } from "../../components/EquipmentCard"
import { useSelector } from "react-redux"
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard"
import {IoChevronBack} from "react-icons/io5"

const Equipos = () => {
    const location = useLocation()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const equipos = useSelector(state => state.equipment)
    const skeletons = [1,2,3,4]

    useEffect(() => {
      if (location.state.length > 0) {
        setItems(location.state)
      } else {
        setItems(equipos)
      }
      return setLoading(false)
    }, [location, equipos])
    
  return (
    <div className="page-container">
      <Container className='p-0 container-custom-style'>
        <Row className="mobile-go-back-row d-flex justify-content-start align-items-center">
          <Link to={'/'} className="back-arrow"><IoChevronBack /></Link>
        </Row>
        <Row className='custom-row'><h1 className='text-start m-5 pb-5 w-100 home-title'>Resultados de la busqueda.</h1></Row>
        <Row className="justify-content-around py-4 px-5 custom-row">
          { loading ? 
            <>
              {skeletons.map(() => {
                return <SkeletonCard/>
              })}
            </>
          :
            <>
              {items.map((item, i) => {
                return <EquipmentCard key={i} item={item}/>
              })}
            </>
          }
        </Row>
      </Container>
    </div>
  )
}
export default Equipos