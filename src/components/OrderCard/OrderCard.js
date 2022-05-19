import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';







function OrderCard() {
    return (
        <>
       <Card style={{ marginLeft: '1rem', marginRight: '1rem', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
          <Card.Body className="text-center" variant="top">
            <Row>
            <Col  md='3'>
            <Card.Title>Order # 3232</Card.Title>
            </Col>
            <Col  md='3'>
              <Card.Text>2/24/22</Card.Text>
            </Col>
            <Col md='3'>
              <Card.Text>Total</Card.Text>
            </Col>
            <Col md='3'>
              <Link to='/OrderDetails'>
              <Button>View Order</Button>
              </Link>
            </Col>
            </Row>
          </Card.Body>
          </Card>
      </>
    );
  }
  
    
export default OrderCard;