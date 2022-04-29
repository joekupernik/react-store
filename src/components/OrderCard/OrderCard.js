import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Link } from 'react-bootstrap/Link';
import { Link } from 'react-router-dom';







function OrderCard() {
    return (
        <>
       <div className="container">
        <Row>
            <Col sm={6} md={4} className='mt-3'>
                <Card style={{ width: '18rem', padding: '.5rem', margin: '.5rem', height: '30rem', overflow: 'hidden', boxshadow: 'lightblue' }}>
                  <Card.Img variant="top" src="" style={{height: '10rem', width: 'auto'}}/>
                  <Card.Body>
                    <Card.Title>order#</Card.Title>
                    <Card.Text>Order Date</Card.Text>
                    <Card.Text >
                      Order Details
                    </Card.Text>
                    <Link to="/orderdetails">
                    <Button variant="primary">View</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
        </Row>
      </div>
      </>
    );
  }
  
    
export default OrderCard;