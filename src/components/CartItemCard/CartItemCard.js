import React from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
import Incrementer from "../Incrementer/Incrementer";
import Image from '../../asset/sub.jpg';




function CartItemCard() {




  return (
    <>
      <Card style={{ width: '100%', margin: '1%', height: '8rem', boxshadow: 'lightblue' }}>
        <Row style={{padding: '5%', width: '100%', height: '100%'}}>
        <Col md='4'>
          <Card.Img variant="top" src={Image} style={{ height: '4rem', width: 'auto' }} />
        </Col>
        <Col md='8'>
          <Card.Body className="text-center" variant="top">
            <Row>
            <Col  md='4'>
              <Card.Title>title</Card.Title>
            </Col>
            <Col md='4'>
              <Card.Text>price</Card.Text>
            </Col>
            <Col md='4'>
              <Incrementer />
            </Col>
            </Row>
          </Card.Body>
        </Col>
        </Row>
      </Card>
    </>
  );
}

export default CartItemCard;
