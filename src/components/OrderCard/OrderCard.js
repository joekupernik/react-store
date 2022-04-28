import React from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
//import InputGroup from 'react-bootstrap/InputGroup';
//import FormControl from 'react-bootstrap/FormControl';



function OrderCard() {

    return (
        <>
            <Card>
                <Row>
                    <Col>
                        <ListGroup as="ol" >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Item</div>
                                    Description
                                </div>
                                <p>
                                    $14
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">item</div>
                                    Description
                                </div>
                                <p >
                                    $14
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Item</div>
                                    Description
                                </div>
                                <p >
                                    $14
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Total</div>
                                </div>
                                <p >
                                    $14
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default OrderCard;