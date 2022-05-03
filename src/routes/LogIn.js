import React from "react";
import Button from 'react-bootstrap/Button';
import LoginForm from "../components/LoginForm/LoginForm";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';







function Login() {
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
        <div><Button style={{margin: '.5rem'}}>Forgot Password</Button></div>
        <div><Button style={{margin: '.5rem'}}>Forgot Username</Button></div>
        <div><Link to='/Register'>
        <Button style={{margin: '.5rem'}}>Create Account</Button>
        </Link></div>
        </div>
        </div>
    </>
  );
}

export default Login;