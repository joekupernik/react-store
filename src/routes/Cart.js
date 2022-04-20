import React from "react";
import Header from '../components/Header/Header';
import CartItemCard from "../components/CartItemCard/CartItemCard";


function Cart() {
    return (
      <>
        <main>
          <Header />
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
          <CartItemCard />
        </main>
      </>
    );
  }

  export default Cart;