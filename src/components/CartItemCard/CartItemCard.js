import React from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
import Incrementer from "../Incrementer/Incrementer";



function CartItemCard() {




  return (
    <>
      
      <Card style={{ width: '14rem', padding: '.5rem', margin: '.5rem', height: '16rem', overflow: 'hidden', boxshadow: 'lightblue' }}>
        <Card.Img variant="top" src="" style={{ height: '4rem', width: 'auto' }} />
        <Card.Body className="text-center" variant="top">
          <Card.Title>title</Card.Title>
          <Card.Text>price</Card.Text>
            <Incrementer />
        </Card.Body>
      </Card>
    </>
  );
}

export default CartItemCard;
