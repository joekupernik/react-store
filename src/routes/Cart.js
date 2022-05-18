import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CartItemCard from "../components/CartItemCard/CartItemCard";
import { Link } from 'react-router-dom';






function Cart() {
  return (
    <>
      <hr
        style={{
          color: "black",
          height: 3
        }}
      />
          <Card style={{ marginTop: '5rem', marginLeft: '5rem', marginRight: '5rem', marginBottom: '1rem', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
            <Card.Body style={{ margin: '2%' }}>
              <CartItemCard />
            </Card.Body>
          </Card>
          <Card style={{ marginLeft: '5rem', marginRight: '5rem', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
          <Card.Body className="text-center" variant="top">
            <Row>
            <Col  md='4'>
              <Card.Title>Total</Card.Title>
            </Col>
            <Col md='4'>
              <Card.Text>price</Card.Text>
            </Col>
            <Col md='4'>
              <Link to='/checkout'>
              <Button>Checkout</Button>
              </Link>
            </Col>
            </Row>
          </Card.Body>
          </Card>
    </>
  )
}

export default Cart;