import React from "react";
import Card from 'react-bootstrap/Card';
import OrderDetailsCard from '../components/OrderDetailsCard/OrderDetailsCard';











function OrderDetails() {
    return (
      <>
      <div>
        <Card style={{ padding: '1rem', margin: '1rem', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
        <Card.Title>Thanks for your Order!</Card.Title>
        <OrderDetailsCard />
      
        </Card>
      </div>
      </>
    );
  }

  export default OrderDetails;