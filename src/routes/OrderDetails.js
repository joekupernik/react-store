import React from "react";
//import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';





function OrderDetails() {


  return (
    <>
      <h1>Order #</h1>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
              <td>Otto</td>
              <td>45$</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}


export default OrderDetails;