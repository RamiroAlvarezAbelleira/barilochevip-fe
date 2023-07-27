import { useRef } from 'react';
import { Navbar, Nav, Container, Form, Button, Dropdown, Row, Col, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import image from "../../assests/images/Bvip-LOGO.png";
import "./Header.css"

const Header = () => {

    const search = useRef()

    const handleSearch = () => {

    }

    /* active and inactive link styles*/

    let active = 'p-3 text-center text-decoration-none text-white active-link'
    let notActive = 'p-3 text-center text-decoration-none inactive-link'

  return (
    <Navbar expand="md" className='header'>
      <Navbar.Brand href="/"><NavLink to="/"><img src={image} alt="BiciMundo" width="200" className='home-logo'/></NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            <Col className='mt-2 d-flex align-items-center'>
              <NavLink to="/" end className={({ isActive }) => (isActive ? active : notActive)}  >
                Home
              </NavLink>
                <NavDropdown
                      id="nav-dropdown-dark-example"
                      align="end"
                      title='Equipos'
                      className='px-1 py-0 m-0 rent-dropdown'
                    >
                      <Dropdown.Item>
                        <NavLink to="/perfil" className="text-decoration-none text-dark">
                          Raquetas de nieve
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to="/carrito" className="text-decoration-none text-dark">
                          Mochilas
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to="/carrito" className="text-decoration-none text-dark">
                          Carpas
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to="/carrito" className="text-decoration-none text-dark">
                          Bolsas de dormir
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to="/carrito" className="text-decoration-none text-dark">
                          Bastones de trekking
                        </NavLink>
                      </Dropdown.Item>
                    </NavDropdown>
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