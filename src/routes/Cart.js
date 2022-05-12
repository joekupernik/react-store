import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import CartItemCard from "../components/CartItemCard/CartItemCard";
//import { Link } from 'react-router-dom';






function Cart() {
  return (
    <>
    <h1>Cart</h1>
    <hr
            style={{
              color: "black",
              height: 3
            }}
          />
      <Card>
        <Row>
          <Col>
            <h2>Items</h2>
            <Card>
              <Card style={{ width: '100%' }}>
                <Card.Body style={{ margin: '2%'}}>
                  <CartItemCard />
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <h2>Payment</h2>
              <Row>
                <Col>
                  <Card>
  
                  </Card>
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