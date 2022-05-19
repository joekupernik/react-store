import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrderCard from "../components/OrderCard/OrderCard";


function Account() {
  return (
    <>
      <hr
        style={{
          color: "black",
          height: 3
        }}
      />
      <h1>My Account</h1>
      <Row>
      <Col sm={4}>
      <Card style={{ width: 'auto', height: '18rem', padding: '.5rem', margin: '1rem', overflow: 'hidden', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
        <Card.Title>Welcome John</Card.Title>
        <Card.Body>
          <Card.Text>First Name</Card.Text>
          <Card.Text>Last Name</Card.Text>
          <Card.Text>Username Name</Card.Text>
          <Card.Text>Change Password</Card.Text>
          <Card.Text>Log Out</Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col sm={8}>
        <Card style={{ width: 'auto', height: '18rem', padding: '.5rem', margin: '1rem', overflow: 'hidden', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
        <Card.Title>Orders</Card.Title>
        <OrderCard />
        </Card>
      </Col>
      </Row>
    </>
  );
}

export default Account;