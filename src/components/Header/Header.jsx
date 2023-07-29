import { useRef } from 'react';
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import image from "../../assests/images/Bvip-LOGO.png";
import "./Header.css"
import axios from '../../api/axios';

const Header = () => {

    const search = useRef()
    const navigate = useNavigate()

    const handleSearch = async (e) => {
      e.preventDefault()
      if (search.current?.value !== "") {
        const response = await axios.get(`/equipos?query=${search.current.value}`)
        navigate('/equipos', {state: response.data})
      }
    }

    /* active and inactive link styles*/

    let active = 'text-center text-decoration-none text-white active-link'
    let notActive = 'text-center text-decoration-none inactive-link'

  return (
    <Navbar expand="md" className='header'>
      <Navbar.Brand href="/"><NavLink to="/"><img src={image} alt="BiciMundo" width="200" className='home-logo'/></NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav d-flex">
        <Nav className='nav-container'>
          <Container className='header-container'>
          <Row className='mt-3'>
            <Form onSubmit={handleSearch} className="d-flex w-100">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                ref={search}
              />
              <Button type='submit' variant="outline-light">Buscar</Button>
            </Form>
          </Row>
          <Row className='links-row'>
            <Col className='mt-2 d-flex align-items-start'>
              <NavLink to="/" end className={({ isActive }) => (isActive ? active : notActive)}  >
                Home
              </NavLink>
            </Col>
            <Col className='right-links-container mt-2'>
                <NavLink to="/nosotros" className={({ isActive }) => (isActive ? active : notActive)} >
                    Sobre nosotros
                </NavLink>
                <NavLink to="/contacto" className={({ isActive }) => (isActive ? active : notActive)} >
                    Contacto
                </NavLink>
            </Col>
          </Row>
          </Container>
        </Nav>
      </Navbar.Collapse>

    </Navbar >
  );
}
export default Header