import { Container, Row } from 'react-bootstrap'
import './Home.css'
import { EquipmentCard } from '../../components/EquipmentCard'
import { HomeCarousel } from '../../components/HomeCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from '../../api/axios'
import { getEquipment } from '../../redux/states/equipment'
import { DestinationCard } from '../../components/DestinationCard'

const Home = () => {
  const destinations = [
    {
      id: 1,
      img: 'img-1',
      title: 'Cerro López',
      subtitle: 'Conquista las alturas en una épica travesía por el majestuoso Cerro López.',
      info: 'El Cerro López es un desafiante pero gratificante cerro para los amantes del trekking en Bariloche. Con alturas que superan los 2,070 metros, esta impresionante montaña ofrece rutas panorámicas a través de densos bosques de lengas y vistas espectaculares del lago Nahuel Huapi y sus alrededores. La cima recompensa a los excursionistas con un paisaje deslumbrante de picos montañosos y la majestuosidad de la Patagonia argentina. Es importante estar bien preparado físicamente y llevar el equipo adecuado, ya que el ascenso puede ser exigente.'
    },
    {
      id: 2,
      img: 'img-2',
      title: 'Cerro Capilla',
      subtitle: 'Sumérgete en la serenidad de la naturaleza en el Trekking del Cerro Capilla.',
      info: 'El Cerro Capilla es una opción atractiva para los que buscan una experiencia de trekking más moderada pero igualmente impresionante. Con una altura de aproximadamente 1,570 metros, este cerro ofrece rutas escénicas a través de bosques y prados, con vistas panorámicas del lago Moreno y la Cordillera de los Andes. Durante el recorrido, los excursionistas se encuentran con una pequeña capilla en la cima, que le da nombre al cerro. Es una opción ideal para aquellos que desean disfrutar de la naturaleza sin un esfuerzo físico extremo.'
    },
    {
      id: 3,
      img: 'img-3',
      title: 'Cerro Frey',
      subtitle: 'Un desafío vertical: Descubre la aventura del trekking y la escalada en el Cerro Frey.',
      info: 'El Cerro Frey es una aventura para los amantes del trekking y la escalada. Ubicado en la zona de Villa Catedral, esta montaña desafía a los excursionistas con su terreno rocoso y escarpado. El trekking hasta el refugio Frey ofrece vistas impresionantes de lagos y bosques, mientras que los escaladores expertos pueden continuar hasta las cimas circundantes para disfrutar de panoramas aún más asombrosos. El refugio Frey, rodeado de impresionantes picos rocosos, ofrece una experiencia única de montaña y la posibilidad de pernoctar bajo las estrellas.'
    },
    {
      id: 4,
      img: 'img-4',
      title: 'Cerro Llao Llao',
      subtitle: 'Un paseo mágico: Disfruta del encanto natural del Cerro Llao Llao en una caminata relajante.',
      info: 'El Cerro Llao Llao es una opción ideal para aquellos que buscan una caminata relajante y pintoresca. Ubicado cerca del Hotel Llao Llao, este cerro ofrece senderos bien señalizados y fáciles de seguir, con vistas panorámicas del lago Nahuel Huapi y las montañas circundantes. Durante el recorrido, los excursionistas pueden encontrarse con el Mirador de Llao Llao, que brinda una vista excepcional del entorno. Esta caminata es perfecta para disfrutar de la naturaleza sin un nivel de dificultad excesivo.'
    },
  ]
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
      <div className='equipos-background'>
        <Container className='p-0 container-custom-style'>
          <Row className='custom-row'><h1 className='text-start m-5 w-100 home-title home-section-title'>Nuestros equipos.</h1></Row>
          <Row className="justify-content-center py-4 px-5 custom-row">
            { 
              items.map((item, i) => {
                return <EquipmentCard key={i} item={item}/>
              })
            }
          </Row>
        </Container>
      </div>
      <div className='conditions-container'>
        <Row className='custom-row'><h3 className='home-section-title'>Destinos recomendados.</h3></Row>
        <Row className="justify-content-center py-4 px-5 custom-row">
          { 
            destinations.map((item, i) => {
              return <DestinationCard key={i} destination={item}/>
            })
          }
        </Row>
      </div>
      <div className='destinations-container d-flex align-items-center justify-content-center'>
        <Row className='w-75'>
          <h3 className='home-section-title'>Condiciones de renta.</h3>
          <p>El alquiler de los equipos es por días, y el cliente debe comprometerse a devolverlos en las mismas condiciones que me fueron entregados, caso contrario debera hacerse cargo de la reparación o reintegro del monto de su costo completo en el caso de que no se puedan reparar. 
            El uso de los equipos y la actividad que realice con ellos corre completamente bajo la responsabilidad del cliente. 
            El cliente debe comprometerse a devolver el equipo en el tiempo y forma pactadas, caso contrario debera abonar el recargo correspondiente por cada día de retraso. 
            Para concretar el alquiler debera entregar su DNI (actualizado), licencia de conducir o monto en efectivo equivalente al valor del equipo alquilado como garantía de que el equipo será devuelto.
          </p>
        </Row>
      </div>
    </div>
  )
}
export default Home