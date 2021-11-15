import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const NavbarCustom = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          SWAPI
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom
