import { Container, Row } from 'react-bootstrap'
import './Home.css'
import { EquipmentCard } from '../../components/EquipmentCard'
import { HomeCarousel } from '../../components/HomeCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from '../../api/axios'
import { getEquipment } from '../../redux/states/equipment'

const Home = () => {
  const items = useSelector(state => state.equipment)
  const dispatch = useDispatch()

  useEffect(() => {
    const getEquipos = async () => {
      const response = await axios.get('/equipos')
      if (response.status === 200) {
        dispatch(getEquipment(response.data))
      }
    }
    getEquipos()
  },[dispatch])
  return (
    <div className="page-container">
      <HomeCarousel />
      <Container className='p-0 container-custom-style'>
        <Row><h1 className='text-start mt-5 mx-5'>Nuestros equipos.</h1></Row>
        <Row className="justify-content-between py-4 px-5">
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
export default Home