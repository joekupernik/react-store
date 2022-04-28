import React from "react";
//import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CheckoutForm from '../components/CheckoutForm/CheckoutForm';


function Account() {
  return (
    <>
      <main>
        <h1>Checkout</h1>
        <div style={{ padding: '2%', margin: '3%' }}>
        <h2>Billing address</h2>
          <Card>
            <CheckoutForm />
          </Card>
        <h2>Shipping address</h2>
        

        <h2>Payment</h2>
            
        </div>
      </main>

    </>
  );
}

export default Account;