import React from "react";
//import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';
//import InputGroup from 'react-bootstrap/InputGroup';
//import FormControl from 'react-bootstrap/FormControl';
import LoginForm from "../components/LoginForm/LoginForm";
import Card from 'react-bootstrap/Card';







function Account() {
  return (
    <>
       <h1 style={{padding: '2%', margin: '2%'}}>Join Us!</h1>
       <hr
            style={{
              color: "black",
              height: 3
            }}
          />
        <div style={{margin: '10%'}}>
        <Card>
          <Card.Header>
          Log In
          </Card.Header>
          <Card.Body  style={{ margin: 'auto' }}>
            <LoginForm />
          </Card.Body>
        </Card>
        <div style={{margin: '2%'}}>
        <p>Forgot Password</p>
        <p>Forgot Username</p>
        <p>Create Account</p>
        </div>
        </div>
    </>
  );
}

export default Account;