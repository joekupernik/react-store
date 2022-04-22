import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Header (){
    return (
       <>
  <Navbar bg="dark"  variant="dark" sticky="top">
    <Container>
    <Navbar.Brand >Awesome Store!!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link ><Link to="/">Home</Link></Nav.Link>
    </Nav>
    <Nav className="justify-content-end">
    <Nav.Link ><Link to="/Login">Login</Link></Nav.Link>
    <Nav.Link > <Link to="/Cart"> Cart</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
       </>
    );
}

export default Header;
