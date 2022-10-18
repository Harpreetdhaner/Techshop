import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
    <Container>
      <LinkContainer to='/'>
      <Navbar.Brand>TECHSHOP</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <Container className='ml-auto'>
        <Nav className="ml-auto">
          <LinkContainer to='/cart'>
          <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
          <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
          </LinkContainer>
        </Nav>
        </Container>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header