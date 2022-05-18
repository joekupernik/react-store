import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';
import Logo from '../../asset/Logo.png';




function Header (){
    return (
       <>
  <Navbar bg="dark"  variant="dark" sticky="top">
    <Container>
    <Navbar.Brand>
   <Link to="/">
    <img src={Logo} alt="logo" style={{ height: '4rem'}} className="d-inline-block align-top" /></Link>
     {' '}
      Awesome Store
      
     </Navbar.Brand>
    <Nav className="me-auto">
  
    </Nav>
    <Nav className="justify-content-end">
    <Nav.Link ><Link to="/Login">Login</Link></Nav.Link>
    <Nav.Link > 
    <Link to="/Cart">
    <Button variant="warning">
  Cart <Badge bg="secondary">9</Badge>
</Button>
</Link>
</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
       </>
    );
}


export default Header;
