import React from "react";
//import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CheckoutForm from '../components/CheckoutForm/CheckoutForm';


function Checkout() {
  return (
    <>
      <main>
        <h1>Checkout</h1>
        <div style={{ padding: '2%', margin: '3%' }}>
        <h2>Shipping address</h2>
          <Card>
            <CheckoutForm />
          </Card>   
        </div>
      </main>

    </>
  );
}

export default Checkout;