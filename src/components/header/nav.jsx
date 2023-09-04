import "./styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import CartWidget from "./CartWidget";




function BasicExample() {

  

  
  return (
    <Navbar className="text-bg-light" expand="lg" bg="success" color="light">
      <Container>
        <Navbar.Brand href="#home" className="text-light">Ecommerce React</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                {/* <Nav.Link href="#home" className="text-light">Inicio</Nav.Link>
                <Nav.Link href="#action/3.1">Laptops</Nav.Link>
                <Nav.Link href="#action/3.2">Smartphones</Nav.Link>
                <Nav.Link href="#action/3.3">TV</Nav.Link> */}
            
            </Nav>
        </Navbar.Collapse>

        <CartWidget/>

      </Container>
    </Navbar>
  );
}

export default BasicExample;