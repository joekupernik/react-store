import React from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';





function OrderCard(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Order Number 12434
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Date: 4/22/22</h4>
          <ul>
              <li>item:   Price;   Qty:</li>
              <li>item:   Price;   Qty:</li>
              <li>item:   Price;   Qty:</li>
          </ul>
          <p>
            Thank you so much for your order. please let me know if you have any issues.  
          </p>
          <p>Track your order</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
    
export default OrderCard;