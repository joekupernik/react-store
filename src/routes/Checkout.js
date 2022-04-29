import React from "react";
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