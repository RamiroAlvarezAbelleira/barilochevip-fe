import { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Dropdown, DropdownButton, Row, Col, Badge, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import image from "../../assests/images/Bvip-LOGO.png";
import { FaShoppingCart } from 'react-icons/fa'
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
                      title='Alquiler de equipos'
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
              {/* {
                userState.firstName ?
                  <>
                    <DropdownButton
                      id="nav-dropdown-dark-example"
                      align="end"
                      title={userState.firstName}
                      className='user-dropdown px-1 py-0 m-0'
                      variant="dark"
                    >
                      <Dropdown.Item>
                        <NavLink to="/perfil" className="text-decoration-none text-dark">
                          Perfil
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to="/carrito" className="text-decoration-none text-dark">
                          Carrito
                        </NavLink>
                      </Dropdown.Item>
                      { userState.roleId === 1 ? 
                        <Dropdown.Item>
                          <NavLink to="/productos/crear" className="text-decoration-none text-dark">
                            Cargar producto
                          </NavLink>
                        </Dropdown.Item> 
                        
                        :
                      
                        <></>
                      }
                      <Dropdown.Divider />

                      <Dropdown.Item onClick={handleLogout}>
                        Cerrar sesion
                      </Dropdown.Item>
                    </DropdownButton>
                    <NavLink to="/carrito" className={({ isActive }) => `fs-4 d-flex align-items-center justify-content-center ${(isActive ? active : notActive)}`} >
                      <FaShoppingCart className='w-auto h-50 align-self-center'/>
                    </NavLink>
                    {cartTotalItems > 0 ?
                     <Badge bg='danger' className='cart-total-items-badge'>{cartTotalItems}</Badge> :
                     <></>
                    }
                  </>
                  :
                  <>
                    <NavLink to="/registro" className={({ isActive }) => (isActive ? active : notActive)} >
                      Registro
                    </NavLink>
                    <NavLink to="/ingresar" className={({ isActive }) => (isActive ? active : notActive)} >
                      Ingresar
                    </NavLink>
                  </>
              } */}
            </Col>
          </Row>
          </Container>
        </Nav>
      </Navbar.Collapse>

    </Navbar >
  );
}
export default Header