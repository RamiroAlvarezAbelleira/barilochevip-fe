import { Container, Row } from 'react-bootstrap'
import './Home.css'
import { EquipmentCard } from '../../components/EquipmentCard'
import { useState } from 'react'
import raquetas from "../../assests/images/raquetas-de-nieve.jpg"
import bastones from "../../assests/images/bastones-de-trekking.jpg"
import carpa from "../../assests/images/carpa.jpg"
import mochila from "../../assests/images/mochila.jpg"
import botas from "../../assests/images/botas.jpg"
import campera from "../../assests/images/campera.jpg"
import radio from "../../assests/images/radio.jpg"
import bolsadormir from "../../assests/images/bolsadormir.jpg"

const Home = () => {
  const [items, setItems] = useState([
    {
      name: 'Raquetas de nieve',
      priceXday: 5000,
      image: raquetas
    },
    {
      name: 'Bastones de trekking',
      priceXday: 2000,
      image: bastones
    },
    {
      name: 'Carpa',
      priceXday: 7000,
      image: carpa
    },
    {
      name: 'Mochila',
      priceXday: 5000,
      image: mochila
    },
    {
      name: 'Botas',
      priceXday: 5000,
      image: botas
    },
    {
      name: 'Campera',
      priceXday: 3000,
      image: campera
    },
    {
      name: 'Radio',
      priceXday: 2000,
      image: radio
    },
    {
      name: 'Bolsa de dormir',
      priceXday: 3000,
      image: bolsadormir
    },
  ]) 

  return (
    <Container className="page-container">
        <Row><h1>Equipos</h1></Row>
        <Row className="justify-content-between my-4">
          { 
            items.map((item, i) => {
              return <EquipmentCard id={i} item={item}/>
            })
          }
        </Row>
    </Container>
  )
}
export default Home