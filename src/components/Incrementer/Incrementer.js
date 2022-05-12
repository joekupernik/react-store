import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const Incrementer = (props) => {
    const { value, onDecrement, onIncrement } = props;
    

    return (
        <>
        <Row>
          <Col md='4'>
            <Button variant="outline-dark" aria-label="remove from shopping cart" onClick={onDecrement}> -
            </Button>
          </Col>
          <Col md='4'>
            <Form.Control type="integer"   input={value} />
          </Col>
          <Col md='4'>
            <Button variant="outline-dark" aria-label="add to shopping cart" onClick={onIncrement}> +
            </Button>
          </Col>
        </Row>
       </> 
    );
}

export default Incrementer;