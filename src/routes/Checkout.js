import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

const stripe = loadStripe("pk_test_1b7TDT5I1aLlj6UAhEejbqrh");

function Checkout() {
  return (
    <Elements stripe={stripe}>
        <CheckoutForm />
    </Elements>
  );
}

export default Checkout;
