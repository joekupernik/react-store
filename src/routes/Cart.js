import React from "react";
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import CartItemCard from "../components/CartItemCard/CartItemCard";
//import { Link } from 'react-router-dom';






function Cart() {
  return (
    <>
    <hr
            style={{
              color: "black",
              height: 3
            }}
          />
              <Card style={{margin: '5rem', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
                <Card.Body style={{ margin: '2%'}}>
                  <CartItemCard />
                </Card.Body>
              </Card>
            
    </>
  )
}

export default Cart;