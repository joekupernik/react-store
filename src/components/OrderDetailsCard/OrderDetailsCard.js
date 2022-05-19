import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';





function OrderDetailsCard() {
  return (
    <>
      <div>
        <Card style={{ padding: '1rem', margin: '1rem'}}>
          <Row>
              <Col md={6}>
                <Card.Text>Order # 123323122</Card.Text>
              </Col>
              <Col md={6}>
              <Card.Text>Date Ordered  2/22/22</Card.Text>
              </Col>
          </Row>
          <Card style={{ padding: '1rem', margin: '1rem'}}>
          <Row>
              <Col>item image</Col>
              <Col>item name</Col>
              <Col>item qty</Col>
              <Col>price</Col>
              <Col>total</Col>
          </Row>
        </Card>
         <Card style={{ padding: '1rem', margin: '1rem'}}>
          <Row>
          <Col md={6}>
          Shipping 
              </Col>
              <Col md={6}>
                <Card.Text>free</Card.Text>
              </Col>              
          </Row>
          </Card>
          <Card style={{ padding: '1rem', margin: '1rem'}}>
          <Row>
          <Col md={6}>
                <Button>track order</Button>
              </Col>
              <Col md={6}>
                <Card.Text>Total 1,232$</Card.Text>
              </Col>
              </Row>
          </Card>
        </Card>
        
      </div>
    </>
  );
}

export default OrderDetailsCard;