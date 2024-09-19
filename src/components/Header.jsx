import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-brands fa-square-youtube fa-flip fa-2xl" style={{color: "#0e1944",}} />
            {' '}
            MEDIA PLAYER
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
