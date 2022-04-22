import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';




function Cart() {
  return (
    <>
      <main>
        <h1 style={{ padding: '.5rem', margin: '.5rem' }}>Cart</h1>
        <hr
          style={{
            color: "black",
            height: 3
          }}
        />
        <Container>
          <Row>
            <Col>
              <div class="col-md-4">
                <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem' }}>
                  <Card.Img variant="top" src="holder.js" />
                  <Card.Body>
                    <Card.Title>Item</Card.Title>
                    <Card.Text>
                      Product Description
                    </Card.Text>
                    <Button variant="primary">+/-</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem' }}>
                  <Card.Img variant="top" src="holder.js" />
                  <Card.Body>
                    <Card.Title>Item</Card.Title>
                    <Card.Text>
                      Product Description
                    </Card.Text>
                    <Button variant="primary">+/-</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <Card>
                <div>
                  <h2>Checkout Form</h2>
                </div>
                <div>
                  <Row>
                    <Col>
                      <h3>Your Cart   </h3>
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
                            <div className="fw-bold">Promo</div>
                          </div>
                          <p >
                            $0
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
                      <ListGroup horizontal>
                          
                          <div>
                          <Button>Apply</Button>
                          </div>
                         
        
                            <div>
                              <p>Promo Code</p>
                            </div>
                      </ListGroup>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Cart;