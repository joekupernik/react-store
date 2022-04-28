import React from "react";
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import ListGroup from 'react-bootstrap/ListGroup';
//import InputGroup from 'react-bootstrap/InputGroup';
//import FormControl from 'react-bootstrap/FormControl';
import CartItemCard from "../components/CartItemCard/CartItemCard";
import OrderCard from '../components/OrderCard/OrderCard';






function Cart() {
  return (
    <>
      <Card>
        <Row>
          <Col>
            <h2>Items</h2>
            <Card>
              <Card>
                <Card.Body style={{ margin: 'auto' }}>
                  <CartItemCard />
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <h2>Order Summary</h2>
              <Row>
                <Col>
                 <OrderCard />
                  <Button variant="primary" type="submit" style={{ margin: '2rem' }}>
                    Checkout
                  </Button>
                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Cart;