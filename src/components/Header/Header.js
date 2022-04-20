import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";



function Header (){
    return (
       <>
    <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="/"> <Link to="/">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Account"> <Link to="/Account">Account</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Cart"><Link to="/Cart">
    <Button variant="primary">
  Cart <Badge bg="secondary">9</Badge>
</Button></Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Login"><Link to="/Login">Login</Link></Nav.Link>
  </Nav.Item>
</Nav>
       </>
    );
}

export default Header;
