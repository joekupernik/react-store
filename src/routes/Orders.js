import React from "react";
import Container from 'react-bootstrap/Container';
import OrderCard from '../components/OrderCard/OrderCard';

//import { Link } from 'react-router-dom';
 






function Orders() {

  
    return (
        <>
        <main>
          <h1 style={{ padding: '.5rem', margin: '.5rem' }}>Orders</h1>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
          <h2 style={{ padding: '.5rem', margin: '.5rem' }}>previous orders</h2>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
        <Container>
            <OrderCard />
        </Container>
    </main>
    </>
    );

  
}

export default Orders;
