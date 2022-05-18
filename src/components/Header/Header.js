import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Logo from '../../asset/Logo.png';
import Cart from '../../asset/Cart.png';




function Header (){
    return (
       <>
  <Navbar bg="dark"  variant="dark" sticky="top">
    <Container>
    <Navbar.Brand>
   <Link to="/">
    <img src={Logo} alt="logo" style={{ height: '2.5rem'}} className="d-inline-block align-top" />
    </Link>
     </Navbar.Brand>
    <Nav className="justify-content-center">
    <Nav.Item>
    <Link to="/Login" style={{color: 'white', textDecoration: 'none', fontSize: '1.75rem'}}>Login</Link>
    </Nav.Item>
    </Nav>
    <Nav.Link> 
    <Link to="/Cart">
    
    <Badge bg="warning">
    <img src={Cart} alt="Cart" style={{ height: '2rem'}} className="d-inline-block align-top" />
    9
    </Badge>
    </Link>

</Nav.Link>
    
    </Container>
  </Navbar>
       </>
    );
}


export default Header;
