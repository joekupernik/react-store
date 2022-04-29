import React from "react";
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
//import InputGroup from 'react-bootstrap/InputGroup';
//import FormControl from 'react-bootstrap/FormControl';
import CartItemCard from "../components/CartItemCard/CartItemCard";
//import OrderCard from '../components/OrderCard/OrderCard';
import { Link } from 'react-router-dom';






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
                  <Card>
                    <Row>
                      <Col>
                        <ListGroup as="ol" >
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                          >
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Item</div>
                              Description
                            </div>
                            <p>
                              $14
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                          >
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">item</div>
                              Description
                            </div>
                            <p >
                              $14
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                          >
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Item</div>
                              Description
                            </div>
                            <p >
                              $14
                            </p>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                          >
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">Total</div>
                            </div>
                            <p >
                              $14
                            </p>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Card>
                  <Link to="/Checkout">
                  <Button variant="primary" type="submit" style={{ margin: '2rem' }}>
                    Checkout
                  </Button>
                  </Link>
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