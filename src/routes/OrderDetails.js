import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import OrderCard from '../components/OrderCard/OrderCard';



function OrderDetails() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <div>
      <h1>Order Details</h1>
      <div style={{margin: '8%'}}>
        <h2>Thank you for you buisnesss John!</h2>
      </div>
    </div>
      <Button style={{margin: '5%'}} variant="primary" onClick={() => setModalShow(true)}>
        Show Order Details
      </Button>

      <OrderCard
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default OrderDetails;