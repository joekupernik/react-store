import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Image from '../asset/sub.jpg'



function ProductDetails() {
  return (
    <>
      <div>
        <Card style={{ padding: '1rem', margin: '5rem', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
          <Card.Img variant="top" src={Image} style={{ height: 'auto', width: 'auto' }} />
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>price</Card.Text>
            <Card.Text >
              Description
            </Card.Text>
            <Button variant="primary">add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProductDetails;